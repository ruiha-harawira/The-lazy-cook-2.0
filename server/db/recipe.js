const connection = require('./connection')


function getCategory(category, db = connection) {
  return db('recipe').where('category',category).select()
}

function getAllRecipe(db=connection){
  return db('recipe').select()
}

module.exports = {
  getCategory,
  getAllRecipe
}
