import { fetchRecipe } from '../components/apis/RecipeApi'

//vars
const RECEIVE_RECIPE = 'RECEIVE_RECIPE'

export function receiveRecipe (category) {
  console.log(category)
  return {
    type: RECEIVE_RECIPE,
    payload: category, 
  }
}

// THUNKS

export function getRecipe(category) {
  return(dispatch) => {
   fetchRecipe(category)
    .then(() => {
      dispatch(receiveRecipe(category))
    })
    .catch(err=> console.log(err.message))
  }
}