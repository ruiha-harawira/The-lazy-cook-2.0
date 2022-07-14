import { fetchRecipe, addRecipe } from '../apis/RecipeApi'


//vars
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
export const REQUEST_RECIPE = 'REQUEST_RECIPE'
export const ADD_RECIPE = 'ADD_RECIPE'

export function receiveRecipe (recipeArr) {
  
  return {
    type: RECEIVE_RECIPE,
    payload:recipeArr
  }
}

export function requestAllRecipes() {
  return {
    type: REQUEST_ALL_RECIPES
  }
}


export function postRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    payload: recipe, 
  }
}

// THUNKS

export function getRecipe() {
  return(dispatch) => {
   fetchRecipe()
    .then((recipeArr) => {
      dispatch(receiveRecipe(recipeArr))
    })
    .catch(err=> console.log(err.message))
  }
}

export function addNewRecipe(recipe) {
  return (dispatch) => {
  // dispatch(requestAllRecipes())
  addRecipe()
  .then((res) => {
    dispatch(postRecipe(res.body))
    return null 
  })
  .catch(err=> console.log(err.message))
}}
