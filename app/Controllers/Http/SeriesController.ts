import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { User } from 'App/Models';

export default class SeriesController {
  public async store({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async index({ auth }: HttpContextContract) {
    const user = await User.query().where('id', auth.user!.id).preload('series').firstOrFail();
    return user.series;
  }
}
