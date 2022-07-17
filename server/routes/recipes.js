const express = require('express')
const db = require('../db/dbFuncs/recipes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getRecipes()
    .then((recipe) => {
      res.json(recipe)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req,res) => {
  const recipe = req.body
  db.addOneRecipe(recipe)
.then((recipeArr) => {
  const newRecipeId = recipeArr[0]
  return db.selectRecipe(newRecipeId)
})
.then((recipe) => {
  res.json(recipe)
  
})
.catch(err => {
  console.log(err)
  res.status(500).json({ message: 'Somthing went wrong' })
})
  }
)

router.delete('/:id', (req,res) => {
  const id = req.params.id
  console.log(id)
  db.deleteRecipe(id)
  .then((deleted) => {
    res.json(deleted)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.selectRecipe(id)
    .then((recipe) => {
      res.json(recipe)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
