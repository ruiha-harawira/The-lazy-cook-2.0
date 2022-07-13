import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getRecipe } from '../actions/index'
import { fetchRecipe } from './apis/RecipeApi'

function App () {
  const recipe = useSelector(state => state.recipe)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRecipe())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
