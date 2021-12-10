import BaseSchema from '@ioc:Adonis/Lucid/Schema';
import { QuestionTypes } from 'App/Models';

export default class Questions extends BaseSchema {
  protected tableName = 'questions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.uuid('user_id').references('users.id').onDelete('CASCADE');
      table.text('text').notNullable();
      table.integer('type').notNullable().defaultTo(QuestionTypes.Simple);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
