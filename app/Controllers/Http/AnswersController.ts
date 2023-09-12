import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, validator, rules } from '@ioc:Adonis/Core/Validator';

import { Answer, Question } from 'App/Models';

export default class AnswersController {
  public async store({ request, bouncer }: HttpContextContract) {
    await request.validate({
      schema: schema.create({
        questionId: schema.string({}, [rules.uuid({ version: 4 })]),
      }),
      reporter: validator.reporters.api,
    });
    const question = await Question.findOrFail(request.input('questionId'));

    await bouncer.authorize('ownsQuestion', question);

    return await question.related('answers').create(request.only(['text', 'sort', 'points']));
  }

  public async update({ params, request, bouncer }: HttpContextContract) {
    const answer = await Answer.query().where('id', params.id).preload('question').firstOrFail();

    await bouncer.authorize('ownsQuestion', answer.question);

    answer.merge(request.only(['text', 'points', 'sort']));
    await answer.save();
  }

  public async reorderAnswers({ params, request, bouncer }: HttpContextContract) {
    const question = await Question.findOrFail(params.id);
    await bouncer.authorize('ownsQuestion', question);

    const answerIds = request.input('answers');
    const payload = answerIds.map((id, sort) => ({ id, sort }));
    await Answer.updateOrCreateMany('id', payload);
  }

  public async destroy({ params, bouncer }: HttpContextContract) {
    const answer = await Answer.query().where('id', params.id).preload('question').firstOrFail();
    await bouncer.authorize('ownsQuestion', answer.question);
    await answer.delete();
  }
}
