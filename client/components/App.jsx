import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import AllRecipes from './AllRecipes'
import Home from './Home'
import { getRecipe } from '../actions/index'
import AddForm from './AddForm'
import Nav from './Nav'

function App () {
  const recipes = useSelector((state) => state.recipe)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipe())
  }, [])

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home data={recipes} />} />
          <Route path="/all" element={<AllRecipes />} />
          <Route path="/add" element={<AddForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
