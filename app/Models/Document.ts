import { column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import { UuidModel, Question, DocumentStatuses } from 'App/Models';

export default class Document extends UuidModel {
  @column()
  public title: string;

  @column({ serializeAs: null })
  public questionId: string;

  @column()
  public location: string;

  @column()
  public tempfile: string;

  @column()
  public filename: string;

  @column()
  public public: boolean;

  @column()
  public status: DocumentStatuses;

  @belongsTo(() => Question)
  public question: BelongsTo<typeof Question>;
}
