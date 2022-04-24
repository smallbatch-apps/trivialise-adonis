import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { Series, Event } from 'App/Models';

import CreateEventValidator from 'App/Validators/CreateEventValidator';

export default class EventsController {
  public async store({ bouncer, request }: HttpContextContract) {
    await request.validate(CreateEventValidator);

    const series = await Series.findOrFail(request.input('seriesId'));
    await bouncer.authorize('ownsSeries', series);

    return await series.related('events').create(request.only(['description', 'startTime', 'endTime']));
  }

  public async show({ params, bouncer }: HttpContextContract) {
    const event = await Event.query().where('id', params.id).preload('series').firstOrFail();
    await bouncer.authorize('ownsSeries', event.series);
    return event;
  }

  public async update({ bouncer, request, params }: HttpContextContract) {
    const event = await Event.query().where('id', params.id).preload('series').firstOrFail();
    await bouncer.authorize('ownsSeries', event.series);
    event.fill(request.only(['description', 'startTime', 'endTime', 'status']));

    await event.save();
  }

  public async destroy({}: HttpContextContract) {}
}
