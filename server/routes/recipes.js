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

// router.get('/:category',(req,res)=>{
//   const category = req.params.category
//   db.getCategory(category)
//   .then((category)=>{
//     res.json(category)
//   })
//   .catch(err => {
//     console.log(err)
//     res.status(500).json({ message: 'Somthing went wrong' })
//   })

// })
module.exports = router
