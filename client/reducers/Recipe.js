import { RECEIVE_RECIPE } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  const {type,payload} = action
  switch (type) {
    case RECEIVE_RECIPE:
      return state.filter((recipe) => recipe.category !==payload) 
    default:
      return state
     
  }
}

export default reducer
