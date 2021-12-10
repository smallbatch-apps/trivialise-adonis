import { DateTime } from 'luxon';
import { column, belongsTo, BelongsTo, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';

import { Answer, Document, User, Tag, UuidModel } from 'App/Models';

export default class Question extends UuidModel {
  @column({ serializeAs: null })
  public userId: string;

  @column()
  public text: string;

  @column()
  public type: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @hasMany(() => Answer)
  public answers: HasMany<typeof Answer>;

  @hasMany(() => Document)
  public documents: HasMany<typeof Document>;

  @manyToMany(() => Tag)
  public tags: ManyToMany<typeof Tag>;
}
