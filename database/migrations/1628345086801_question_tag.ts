import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class ModelTags extends BaseSchema {
  protected tableName = 'question_tag';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id');
      table.uuid('tag_id').references('tags.id');
      table.uuid('question_id').references('questions.id');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
