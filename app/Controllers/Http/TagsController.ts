import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { Tag } from 'App/Models';

export default class TagsController {
  public async index({ auth }: HttpContextContract) {
    return Tag.query().whereNull('user_id').orWhere('user_id', auth.user?.id!).orderBy('text', 'desc');
  }
}
