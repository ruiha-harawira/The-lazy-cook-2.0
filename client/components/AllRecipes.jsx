import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import OneRecipe from './OneRecipe'

function AllRecipes({ data }) {
  let recipes = useSelector((state) => state.recipe)
  const { search } = useParams()
  if (search) {
    recipes = recipes.filter((element) => {
      return element.description.includes(search)
    })
  }

  return (
    <>
      <h1 className="recipesH1">All Recipes</h1>
      <div className="allRecipes">
        {recipes.map((recipe) => (
          <OneRecipe data={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  )
}

export default AllRecipes
