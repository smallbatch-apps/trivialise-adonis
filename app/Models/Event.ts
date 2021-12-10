import { DateTime } from 'luxon';
import { column } from '@ioc:Adonis/Lucid/Orm';

import { UuidModel } from 'App/Models';

export default class Event extends UuidModel {
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
