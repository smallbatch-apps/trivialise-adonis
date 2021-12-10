import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { Question } from 'App/Models';

export default class QuestionsController {
  public async index({ auth }: HttpContextContract) {
    return await Question.query()
      .where('userId', auth.user?.id!)
      .preload('answers', (query) => {
        query.orderBy('sort');
      })
      .preload('documents')
      .preload('tags');
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = request.only(['text', 'type']);
    const question = await auth.user?.related('questions').create(data);
    await question?.related('tags').attach(request.input('tags'));
    return question;
  }

  public async show({ params: { id } }: HttpContextContract) {
    return await Question.query()
      .where('id', id)
      .preload('answers', (query) => {
        query.orderBy('sort');
      })
      .preload('documents')
      .preload('tags')
      .firstOrFail();
  }

  public async update({ params, request, bouncer }: HttpContextContract) {
    const question = await Question.findOrFail(params.id);
    await bouncer.authorize('editQuestion', question);
    const { type, text, tags } = request.all();

    if (type) question.type = type;
    if (text) question.text = text;
    if (tags) {
      await question.related('tags').sync(tags.map(({ id }) => id));
    }

    await question.save();
  }

  public async destroy({ params: { id }, response, bouncer }: HttpContextContract) {
    const question = await Question.findOrFail(id);
    await bouncer.authorize('editQuestion', question);
    await question.delete();
    response.status(200);
  }
}
