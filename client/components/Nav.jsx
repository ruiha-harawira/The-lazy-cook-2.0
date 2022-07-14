import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <p>hi</p>
        <Link to="/all">All Recipes</Link>
      </div>
    </>
  )
}

export default Nav
