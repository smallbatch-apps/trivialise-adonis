import BaseSchema from '@ioc:Adonis/Lucid/Schema';

import { EventStatuses, LocationTypes } from 'App/Models';

export default class Events extends BaseSchema {
  protected tableName = 'events';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.uuid('series_id').references('series.id').onDelete('CASCADE');
      table.string('description').nullable();
      table.string('location').nullable();
      table.string('location_type').notNullable().defaultTo(LocationTypes.PlusCode);
      table.dateTime('start_time').nullable().defaultTo(null);
      table.dateTime('end_time').nullable().defaultTo(null);
      table.string('status').notNullable().defaultTo(EventStatuses.Draft);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
