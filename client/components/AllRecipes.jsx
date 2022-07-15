import React from 'react'
import { useSelector } from 'react-redux'
import OneRecipe from './OneRecipe'

function AllRecipes ({ data }) {
  const recipes = useSelector((state) => state.recipe)

  return (
    <>
      <h2>Recipes</h2>
      <div className='allRecipes'>
        {recipes.map(recipe => <OneRecipe data={recipe} key={recipe.id} />)}

      </div>

    </>
  )
}

export default AllRecipes
