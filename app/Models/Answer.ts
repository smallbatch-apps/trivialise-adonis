import { DateTime } from 'luxon';
import { column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';

import { Question, UuidModel } from 'App/Models';

export default class Answer extends UuidModel {
  @column({ serializeAs: null })
  public questionId: string;

  @column()
  public text: string;

  @column()
  public points: number;

  @column()
  public sort: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Question)
  public question: BelongsTo<typeof Question>;
}
