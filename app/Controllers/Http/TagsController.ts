import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { Tag } from 'App/Models';

export default class TagsController {
  public async index({ auth }: HttpContextContract) {
    return Tag.query().whereNull('company_id').orWhere('company_id', auth.user?.id!).orderBy('text', 'desc');
  }
}
