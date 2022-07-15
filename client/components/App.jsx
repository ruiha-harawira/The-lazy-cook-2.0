import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipe } from '../actions/index'
import AllRecipes from './AllRecipes'
import AddForm from './AddForm'



function App () {
  // const state = useSelector(state => state.recipe)

  // console.log(state)
  // const dispatch = useDispatch()


  // useEffect(()=>{
  //   return dispatch(getRecipe())
  // }, [])

  return (
    <div>
    <AllRecipes />
    <AddForm />

     </div>
  )

}

export default App
