exports.up = function (knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('img')
    table.string('category')
    table.string('ingredients')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('recipes')
}
