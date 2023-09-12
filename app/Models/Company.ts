import { DateTime } from 'luxon';
import { column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import { UuidModel, User, Question, Series } from 'App/Models'

export default class Company extends UuidModel {

  @column()
  public name: string;

  @hasMany(() => Question)
  public questions: HasMany<typeof Question>;

  @hasMany(() => Series)
  public series: HasMany<typeof Series>;

  @hasMany(() => User)
  public users: HasMany<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
