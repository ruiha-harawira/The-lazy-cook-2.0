import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import OneRecipe from './OneRecipe'

function AllRecipes ({ data }) {
  let recipes = useSelector((state) => state.recipe)
  const { search } = useParams()
  if (search) {
    recipes = recipes.filter((element) => {
      return element.description.includes(search)
    })
  }

  return (
    <>
<<<<<<< HEAD
      <div className="containerAllRecipe">
        <h1 className="recipesH1">All Recipes</h1>
        <div className="allRecipes">
          {recipes.map((recipe) => (
            <OneRecipe data={recipe} key={recipe.id} />
          ))}
        </div>
||||||| 7b7f1c0
      <h1 className="recipesH1">All Recipes</h1>
      <div className="allRecipes">
        {recipes.map((recipe) => (
          <OneRecipe data={recipe} key={recipe.id} />
        ))}
=======
      <div className='contain'>
        <h1 className="recipesH1">All Recipes</h1>
        <div className="allRecipes">
          {recipes.map((recipe) => (
            <OneRecipe data={recipe} key={recipe.id} />
          ))}
        </div>
>>>>>>> 3201c2b865569b1b89b195df995e6f119c707ea7
      </div>

    </>
  )
}

export default AllRecipes
