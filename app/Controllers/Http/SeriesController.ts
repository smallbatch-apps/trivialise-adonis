import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { User, Series } from 'App/Models';
import CreateSeriesValidator from 'App/Validators/CreateSeriesValidator';

export default class SeriesController {
  public async store({ auth, request }: HttpContextContract) {
    await request.validate(CreateSeriesValidator);
    return auth.user?.related('series').create(request.only(['name', 'description']));
  }

  public async update({ params, request, bouncer }: HttpContextContract) {
    const series = await Series.findOrFail(params.id);
    await bouncer.authorize('ownsSeries', series);
    series.fill(request.only(['name', 'description']));
    await series.save();
  }

  public async index({ auth }: HttpContextContract) {
    const user = await User.query()
      .where('id', auth.user!.id)
      .preload('series', (query) => query.preload('events'))
      .firstOrFail();
    return user.series;
  }
}
