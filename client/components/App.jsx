import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

// import { getRecipe } from '../actions/index'
import AllRecipes from './AllRecipes'
import AddForm from './AddForm'
import Nav from './Nav'

function App() {
  return (
    <div>

      <h2>Good Heavens!</h2>
      <Nav className='nav'/>
      <Routes>
        <Route path="/all" element={<AllRecipes />} />
      
        <Route path="/add" element={<AddForm />} />
      </Routes>
    </div>
  )
}

export default App
