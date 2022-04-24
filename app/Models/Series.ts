import { column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import { UuidModel, Event, User } from 'App/Models';

export default class Series extends UuidModel {
  @column({ serializeAs: null })
  public userId: string;

  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public promoImage: string;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @hasMany(() => Event)
  public events: HasMany<typeof Event>;
}
