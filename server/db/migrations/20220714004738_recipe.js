exports.up = function (knex) {
  return knex.schema.createTable('recipe', table => {
    table.increments('id')
    table.string('category')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('recipe')
}
