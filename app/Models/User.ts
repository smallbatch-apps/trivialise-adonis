import { DateTime } from 'luxon';
import { v4 as uuid } from 'uuid';

import Hash from '@ioc:Adonis/Core/Hash';
import { BaseModel, column, beforeCreate, beforeSave, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';

import { Company } from 'App/Models';

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @column({ serializeAs: null })
  public companyId: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public name: string;

  @belongsTo(() => Company)
  public owner: BelongsTo<typeof Company>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = uuid();
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
