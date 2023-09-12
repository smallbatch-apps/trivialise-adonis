import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.uuid('id').primary();
      table.uuid('company_id').references('companies.id').onDelete('CASCADE');
      table.string('email').notNullable().index().unique();
      table.string('password').notNullable();
      table.string('name').notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
