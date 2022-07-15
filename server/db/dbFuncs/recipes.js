const connection = require('../connection')

function getRecipes (db = connection) {
  return db('recipes').select()
}

function selectRecipe (id, db = connection) {
  return db ('recipes') .select() .where('id', id) .first()
}

function addOneRecipe (recipe, db = connection) {
  return db('recipes').insert(recipe)
}

function deleteRecipe(id, db = connection) {
  return db('recipes').where('id', id) .del()
}

module.exports = {
  getRecipes,
  addOneRecipe,
  selectRecipe,
  deleteRecipe
}
