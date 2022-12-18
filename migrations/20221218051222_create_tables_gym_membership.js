/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.hasTable('gym_membership').then(function (exists) {
    if (!exists) {
      return knex.schema // **** udpate
        .createTable('gym_membership', function (table) {
          table.increments('id').primary();
          table.string('name', 50).notNullable();
          table.string('sex', 20).notNullable();
          table.integer('age', 2).notNullable();
          table.datetime('date_since', { precision: 6 }).defaultTo(knex.fn.now(6));
          table.datetime('date_end', { precision: 6 }).defaultTo(knex.fn.now(6));
          table.string('type_membership', 50).notNullable();
        })
        .then(console.log('created user table'));
    }
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('gym_membership');
};
