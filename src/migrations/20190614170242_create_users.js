
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('mail').notNull().unique();
    table.string('passwd').notNull();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
