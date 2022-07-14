const connection = require('./connection')


function getCategory(category, db = connection) {
  return db('recipes').where('category',category).select()
}

function getAllRecipe(db=connection){
  return db('recipes').select()
}

module.exports = {
  getCategory,
  getAllRecipe
}
