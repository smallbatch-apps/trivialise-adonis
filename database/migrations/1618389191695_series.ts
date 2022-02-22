import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Series extends BaseSchema {
  protected tableName = 'series';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.uuid('user_id').references('users.id').onDelete('CASCADE');
      table.string('name').notNullable();
      table.string('description').nullable();
      table.string('promo_image').nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
