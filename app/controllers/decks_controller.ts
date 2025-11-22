import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'

export default class DecksController {
  async index({ view, auth }: HttpContext) {
    if (auth.user) {
      await auth.user.load('decks', (query) => query.preload('cards'))
      return view.render('pages/home', { decks: auth.user.decks })
    } else {
      return view.render('pages/auth/login')
    }
  }

  async create({ view }: HttpContext) {
    return view.render('pages/decks/create')
  }

  async store({ request, response, auth, session }: HttpContext) {
    const { title, description } = request.only(['title', 'description'])

    if (!title) {
      session.flash('error', 'Title is required')
      return response.redirect().back()
    }
    if (!description || description.length < 10) {
      session.flash('error', 'Description must be at least 10 characters')
      return response.redirect().back()
    }

    const existing = await Deck.query().where('user_id', auth.user!.id).where('title', title).first()
    if (existing) {
      session.flash('error', 'You already have a deck with this title')
      return response.redirect().back()
    }

    await auth.user!.related('decks').create({ title, description })
    session.flash('success', 'Deck created successfully')
    return response.redirect().toPath('/')
  }

  async show({ view, params, auth, response }: HttpContext) {
    try {
      const deck = await auth.user!.related('decks').query().where('id', params.id).preload('cards').firstOrFail()
      return view.render('pages/decks/show', { deck })
    } catch {
      return response.redirect().toPath('/')
    }
  }

  async edit({ view, params, auth, response }: HttpContext) {
    try {
      const deck = await auth.user!.related('decks').query().where('id', params.id).firstOrFail()
      return view.render('pages/decks/edit', { deck })
    } catch {
      return response.redirect().toPath('/')
    }
  }

  async update({ request, response, params, auth, session }: HttpContext) {
    const deck = await auth.user!.related('decks').query().where('id', params.id).firstOrFail()
    const { title, description } = request.only(['title', 'description'])

    if (!title) {
      session.flash('error', 'Title is required')
      return response.redirect().back()
    }
    if (!description || description.length < 10) {
      session.flash('error', 'Description must be at least 10 characters')
      return response.redirect().back()
    }

    if (title !== deck.title) {
      const existing = await Deck.query().where('user_id', auth.user!.id).where('title', title).first()
      if (existing) {
        session.flash('error', 'You already have a deck with this title')
        return response.redirect().back()
      }
    }

    deck.merge({ title, description })
    await deck.save()
    session.flash('success', 'Deck updated successfully')
    return response.redirect().toPath('/')
  }

  async destroy({ params, auth, session, response }: HttpContext) {
    const deck = await auth.user!.related('decks').query().where('id', params.id).firstOrFail()
    await deck.delete()
    session.flash('success', 'Deck deleted successfully')
    return response.redirect().toPath('/')
  }
}