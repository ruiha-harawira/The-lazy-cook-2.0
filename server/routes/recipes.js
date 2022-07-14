const express = require('express')


const db = require('../db/recipe')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getFruits()
//     .then(results => {
//       res.json({ fruits: results.map(fruit => fruit.name) })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Somthing went wrong' })
//     })
// })

router.get('/' ,(req,res)=>{
  db.getAllRecipe()
  .then((recipe)=>{
    res.json(recipe)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.get('/:category',(req,res)=>{
  const category = req.params.category
  db.getCategory(category)
  .then((category)=>{
    res.json(category)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })

})
module.exports = router
