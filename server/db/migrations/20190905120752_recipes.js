exports.up = function (knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('img')
    table.string('category')
    table.string('ingredient1')
    table.string('ingredient2')
    table.string('ingredient3')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('recipes')
}
