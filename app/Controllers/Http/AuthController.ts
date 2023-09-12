import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');

    const token = await auth.use('api').attempt(email, password);
    const user = token.user;
    const fucker = 'thisthing';

    return {
      token: token.token,
      user,
      fucker,
    };
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').logout();
  }

  public async me({ auth }: HttpContextContract) {
    return await auth.user;
  }
}
