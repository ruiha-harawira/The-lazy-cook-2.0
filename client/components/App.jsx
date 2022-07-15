import React,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {Routes,Route} from 'react-router-dom'

import AllRecipes from './AllRecipes'
import Home from './Home'
import {getRecipe} from '../actions/index'




function App () {
  const recipes = useSelector((state) => state.recipe)

 console.log(recipes)
  const dispatch = useDispatch()
 
  useEffect(()=>{
    dispatch(getRecipe())
  },[])
 

  return(
    <Routes>
      <Route path='/' element={<Home data={recipes} />} />
      <Route path='/allrecipes' element={<AllRecipes />} />
    </Routes>
 
  )
}

export default App
