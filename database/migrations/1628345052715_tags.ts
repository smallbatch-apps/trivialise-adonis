import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Tags extends BaseSchema {
  protected tableName = 'tags';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.uuid('company_id').references('companies.id').nullable().defaultTo(null);
      table.string('text');
      table.string('colour').nullable();
      table.string('icon_colour').nullable();
      table.string('icon_secondary_colour').nullable();
      table.string('icon').nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
