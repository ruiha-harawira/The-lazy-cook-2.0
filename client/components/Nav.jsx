import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <nav>
        <div className='nav'>
          <Link to="/">Home</Link>
          <Link to="/all">All Recipes</Link>
          <Link to="/add">Add Recipe</Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
