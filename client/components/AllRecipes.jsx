import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {getRecipe} from '../actions/index'
import OneRecipe from './OneRecipe'

function AllRecipes() {
 const recipes = useSelector((state) => state.recipe)

 const dispatch = useDispatch()

 useEffect(()=>{
  return dispatch(getRecipe())
 },[])


  return (
   
    <>
    <h2>Recipes</h2>

    {recipes.map(recipe => <OneRecipe data={recipe} key={recipe.id} />)}
  
    </>
    )
  }
  


export default AllRecipes