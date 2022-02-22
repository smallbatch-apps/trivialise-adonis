import { DateTime } from 'luxon';
import { column } from '@ioc:Adonis/Lucid/Orm';

import { UuidModel, EventStatuses } from 'App/Models';

export default class Event extends UuidModel {
  @column({ serializeAs: null })
  public seriesId: string;

  @column()
  public description: string;

  @column.dateTime({ autoUpdate: false, autoCreate: false })
  public startTime: DateTime;

  @column.dateTime({ autoUpdate: false, autoCreate: false })
  public endTime: DateTime;

  @column()
  public status: EventStatuses;
}
