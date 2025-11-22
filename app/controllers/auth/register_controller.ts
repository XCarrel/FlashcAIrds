import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, auth, session }: HttpContext) {
    const { username, password, password_confirmation } = request.only(['username', 'password', 'password_confirmation'])

    if (!username || !password || password.length < 8) {
      session.flash('error', 'Nom d\'utilisateur requis et mot de passe minimum 8 caractères')
      return response.redirect().back()
    }

    if (password !== password_confirmation) {
      session.flash('error', 'Les mots de passe ne correspondent pas')
      return response.redirect().back()
    }

    try {
      const user = await User.create({ username, password })
      await auth.use('web').login(user)
      return response.redirect().toPath('/')
    } catch (error) {
      session.flash('error', 'Ce nom d\'utilisateur existe déjà')
      return response.redirect().back()
    }
  }
}