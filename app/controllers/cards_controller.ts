import type { HttpContext } from '@adonisjs/core/http'

export default class CardsController {
  async create({ view, params, auth, response }: HttpContext) {
    try {
      const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
      return view.render('pages/cards/create', { deck })
    } catch {
      return response.redirect().toPath('/')
    }
  }

  async store({ request, response, params, auth, session }: HttpContext) {
    const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
    const { question, answer } = request.only(['question', 'answer'])

    if (!question || question.length < 10) {
      session.flash('error', 'Question must be at least 10 characters')
      return response.redirect().back()
    }
    if (!answer) {
      session.flash('error', 'Answer is required')
      return response.redirect().back()
    }

    const existing = await deck.related('cards').query().where('question', question).first()
    if (existing) {
      session.flash('error', 'This question already exists in this deck')
      return response.redirect().back()
    }

    await deck.related('cards').create({ question, answer })
    session.flash('success', 'Card created successfully')
    return response.redirect().toPath(`/decks/${deck.id}`)
  }

  async show({ view, params, auth, response }: HttpContext) {
    try {
      const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
      const card = await deck.related('cards').query().where('id', params.id).firstOrFail()
      return view.render('pages/cards/show', { deck, card })
    } catch {
      return response.redirect().toPath('/')
    }
  }

  async edit({ view, params, auth, response }: HttpContext) {
    try {
      const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
      const card = await deck.related('cards').query().where('id', params.id).firstOrFail()
      return view.render('pages/cards/edit', { deck, card })
    } catch {
      return response.redirect().toPath('/')
    }
  }

  async update({ request, response, params, auth, session }: HttpContext) {
    const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
    const card = await deck.related('cards').query().where('id', params.id).firstOrFail()
    const { question, answer } = request.only(['question', 'answer'])

    if (!question || question.length < 10) {
      session.flash('error', 'Question must be at least 10 characters')
      return response.redirect().back()
    }
    if (!answer) {
      session.flash('error', 'Answer is required')
      return response.redirect().back()
    }

    if (question !== card.question) {
      const existing = await deck.related('cards').query().where('question', question).first()
      if (existing) {
        session.flash('error', 'This question already exists in this deck')
        return response.redirect().back()
      }
    }

    card.merge({ question, answer })
    await card.save()
    session.flash('success', 'Card updated successfully')
    return response.redirect().toPath(`/decks/${deck.id}`)
  }

  async destroy({ params, auth, session, response }: HttpContext) {
    const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
    const card = await deck.related('cards').query().where('id', params.id).firstOrFail()
    await card.delete()
    session.flash('success', 'Card deleted successfully')
    return response.redirect().toPath(`/decks/${deck.id}`)
  }
}