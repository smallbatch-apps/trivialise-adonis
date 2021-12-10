import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import User from '../../Models/User';

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all();
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['email', 'name', 'password']);
    return await User.create(data);
  }

  public async show({ params }: HttpContextContract) {
    return await User.findOrFail(params.id);
  }

  public async update({ params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    user.fill(request.only(['email', 'name', 'password']));
    await user.save();
  }
}
