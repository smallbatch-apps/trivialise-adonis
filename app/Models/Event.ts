import { DateTime } from 'luxon';
import { column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';

import { UuidModel, EventStatuses, Series } from 'App/Models';

export default class Event extends UuidModel {
  @column()
  public seriesId: string;

  @column()
  public description: string;

  @column()
  public location: string;

  @column.dateTime({ autoUpdate: false, autoCreate: false })
  public startTime: DateTime;

  @column.dateTime({ autoUpdate: false, autoCreate: false })
  public endTime: DateTime;

  @column()
  public status: EventStatuses;

  @belongsTo(() => Series)
  public series: BelongsTo<typeof Series>;
}
