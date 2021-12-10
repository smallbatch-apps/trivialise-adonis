import BaseSchema from '@ioc:Adonis/Lucid/Schema';
import { DocumentStatuses } from 'App/Models';

export default class Documents extends BaseSchema {
  protected tableName = 'documents';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.uuid('id').primary();
      table.uuid('question_id').references('questions.id');
      table.string('title').nullable().defaultTo(null);
      table.string('location').nullable().defaultTo(null);
      table.string('tempfile').nullable().defaultTo(null);
      table.string('filename').nullable().defaultTo(null);
      table.integer('status').notNullable().defaultTo(DocumentStatuses.New);
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
      table.timestamp('deleted_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
