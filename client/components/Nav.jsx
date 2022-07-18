import React from 'react'
import { Link } from 'react-router-dom'
import SearchRecipe from './SearchRecipe'
import { useSelector } from 'react-redux'


function Nav () {
  // const recipes = useSelector((state) => state.recipe)
  // const = recipes.find(element => {
  //   return element.description === id
  // })
  return (
    <>
      <nav>
        <div className='nav'>
          <Link to="/">Home</Link>
          <Link to="/all">All Recipes</Link>
          <Link to="/add">Add Recipe</Link>
        </div>
      
      </nav>
      <SearchRecipe />
    </>
  )
}

export default Nav
