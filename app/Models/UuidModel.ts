import { v4 as uuid } from 'uuid';
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm';
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy';

export default class UuidModel extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy();
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @beforeCreate()
  public static assignUuid(model: UuidModel) {
    if (!model.id) model.id = uuid();
  }
}
