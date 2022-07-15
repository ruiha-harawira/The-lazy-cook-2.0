import { fetchRecipe, postRecipe, deleteOneRecipe} from '../apis/RecipeApi'


//vars
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
export const REQUEST_RECIPE = 'REQUEST_RECIPE'
export const ADD_RECIPE = 'ADD_RECIPE'
export const DEL_RECIPE = 'DEL_RECIPE'

export function receiveRecipe (recipeArr) {
  
  return {
    type: RECEIVE_RECIPE,
    payload: recipeArr
  }
}

export function requestAllRecipes() {
  return {
    type: REQUEST_ALL_RECIPES,
    payload
  }
}


export function addRecipe(newRecipe) {
  return {
    type: ADD_RECIPE,
    payload: newRecipe, 
  }
}

export function deleteRecipe (id) {
  return {
    type: DEL_RECIPE, 
    payload: id 
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

export function addNewRecipe(newRecipe) {
  return (dispatch) => {
  return postRecipe(newRecipe)
  .then((res) => {
    dispatch(addRecipe(res))
   
  })
  .catch(err=> console.log(err.message))
}}

export function removeRecipe(id) {
  return(dispatch) => {
    return deleteOneRecipe(id) 
    .then(() => {
      dispatch(delRecipeItem(id))
    })

    .catch(err => console.log(err.message))
  }
}