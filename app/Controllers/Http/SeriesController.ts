import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { Series } from 'App/Models';
import CreateSeriesValidator from 'App/Validators/CreateSeriesValidator';

export default class SeriesController {
  public async index({ auth }: HttpContextContract) {
    return await Series.query().where('companyId', auth.user?.companyId!);
  }

  public async store({ auth, request }: HttpContextContract) {
    await request.validate(CreateSeriesValidator);
    await auth.user?.load('owner');
    return auth.user?.owner.related('series').create(request.only(['name', 'description']));
  }

  public async update({ params, request, bouncer }: HttpContextContract) {
    const series = await Series.findOrFail(params.id);
    await bouncer.authorize('ownsSeries', series);
    series.fill(request.only(['name', 'description']));
    await series.save();
  }

  public async destroy({}: HttpContextContract) {}
}
