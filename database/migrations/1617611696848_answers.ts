import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Answers extends BaseSchema {
  protected tableName = 'answers';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.uuid('question_id').references('questions.id').onDelete('CASCADE');
      table.text('text').notNullable();
      table.integer('points').unsigned().notNullable().defaultTo(1);
      table.integer('sort').unsigned().notNullable().defaultTo(0);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
