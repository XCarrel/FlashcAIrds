import type { HttpContext } from '@adonisjs/core/http'
import Card from '#models/card'

export default class GamesController {
  async start({ view, params, auth, response }: HttpContext) {
    try {
      const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
      return view.render('pages/game/start', { deck })
    } catch {
      return response.redirect().toPath('/')
    }
  }

  async init({ request, response, params, auth, session }: HttpContext) {
    const deck = await auth.user!.related('decks').query().where('id', params.deck_id).firstOrFail()
    const mode = request.input('mode', 'basic')

    const cards = await deck.related('cards').query().select('id')
    let cardIds = cards.map(c => c.id)

    if (mode === 'random') {
      cardIds = cardIds.sort(() => Math.random() - 0.5)
    }

    session.put('game', {
      deckId: deck.id,
      cardIds,
      currentIndex: 0,
      results: []
    })

    return response.redirect().toPath('/game/play')
  }

  async play({ view, session, response }: HttpContext) {
    const game = session.get('game')
    if (!game) {
      return response.redirect().toPath('/')
    }

    if (game.currentIndex >= game.cardIds.length) {
      return response.redirect().toPath('/game/finish')
    }

    const cardId = game.cardIds[game.currentIndex]
    const card = await Card.find(cardId)
    
    if (!card) {
      game.currentIndex++
      session.put('game', game)
      return response.redirect().toPath('/game/play')
    }

    return view.render('pages/game/play', { card, game })
  }

  async answer({ request, session, response }: HttpContext) {
    const game = session.get('game')
    if (!game) {
      return response.redirect().toPath('/')
    }

    const result = request.input('result')
    game.results.push(result === 'correct')
    game.currentIndex++
    session.put('game', game)

    return response.redirect().toPath('/game/play')
  }

  async finish({ view, session, response }: HttpContext) {
    const game = session.get('game')
    if (!game) {
      return response.redirect().toPath('/')
    }

    const total = game.cardIds.length
    const correct = game.results.filter((r: boolean) => r).length
    const deckId = game.deckId
    
    session.forget('game')

    return view.render('pages/game/finish', { total, correct, deckId })
  }
}