import React from 'react'
import { Link } from 'react-router-dom'

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
          <p><Link to="/">Home</Link></p>
          <p><Link to="/all">Recipes</Link></p>
          <p><Link to="/add">Add recipe</Link></p>
        </div>

      </nav>
     
    </>
  )
}

export default Nav
