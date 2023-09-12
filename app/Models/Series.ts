import { column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import { UuidModel, Event, Company } from 'App/Models';

export default class Series extends UuidModel {
  @column({ serializeAs: null })
  public companyId: string;

  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public promoImage: string;

  @belongsTo(() => Company)
  public owner: BelongsTo<typeof Company>;

  @hasMany(() => Event)
  public events: HasMany<typeof Event>;
}
