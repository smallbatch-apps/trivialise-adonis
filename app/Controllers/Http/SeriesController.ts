import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, validator, rules } from '@ioc:Adonis/Core/Validator';

import { Series } from 'App/Models';

export default class SeriesController {
  public async store({ request, bouncer }: HttpContextContract) {}

  public async update({ params, request, bouncer }: HttpContextContract) {}

  public async index({ auth }: HttpContextContract) {
    return await Series.query()
      .where('userId', auth.user?.id!)
      .preload('answers', (query) => {
        query.orderBy('sort');
      })
      .preload('documents')
      .preload('tags');
  }
}
