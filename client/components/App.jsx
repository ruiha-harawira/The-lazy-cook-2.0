import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getRecipe } from '../actions/index'


function App () {
  const state = useSelector(state => state.recipe)
  console.log(state)
  const dispatch = useDispatch()


  useEffect(()=>{
    return dispatch(getRecipe())

  })

  return (
   <>
  
  </>
  )

}

export default App
