import { fetchRecipe } from '../apis/RecipeApi'

//vars
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'

export function receiveRecipe (recipeArr) {
  
  return {
    type: RECEIVE_RECIPE,
    payload: recipeArr
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