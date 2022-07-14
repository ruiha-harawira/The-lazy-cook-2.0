const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../db/dbFuncs/recipes')

router.get('/', (req, res) => {
  db.getRecipes()
    .then((allRecipes) => res.json(allRecipes))
    .catch((err) => res.status(500).send(err.message))
  })
    


module.exports = router
