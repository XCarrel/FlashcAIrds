/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const RegisterController = () => import('#controllers/auth/register_controller')
const SessionController = () => import('#controllers/auth/session_controller')
const DecksController = () => import('#controllers/decks_controller')
const CardsController = () => import('#controllers/cards_controller')
const GamesController = () => import('#controllers/games_controller')

router.get('/', [DecksController, 'index']).use(middleware.silentAuth())

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])

router.get('/login', [SessionController, 'show'])
router.post('/login', [SessionController, 'store'])
router.post('/logout', [SessionController, 'destroy'])

router.group(() => {
  router.resource('decks', DecksController).except(['index'])
  
  router.get('/decks/:deck_id/cards/create', [CardsController, 'create'])
  router.post('/decks/:deck_id/cards', [CardsController, 'store'])
  router.get('/decks/:deck_id/cards/:id/edit', [CardsController, 'edit'])
  router.put('/decks/:deck_id/cards/:id', [CardsController, 'update'])
  router.delete('/decks/:deck_id/cards/:id', [CardsController, 'destroy'])
  router.get('/decks/:deck_id/cards/:id', [CardsController, 'show'])

  router.get('/decks/:deck_id/play', [GamesController, 'start'])
  router.post('/decks/:deck_id/play', [GamesController, 'init'])
  router.get('/game/play', [GamesController, 'play'])
  router.post('/game/answer', [GamesController, 'answer'])
  router.get('/game/finish', [GamesController, 'finish'])
}).use(middleware.auth())
