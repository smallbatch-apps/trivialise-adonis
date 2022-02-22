import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class QuestionTypes extends BaseSchema {
  protected tableName = 'question_types';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name').notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
