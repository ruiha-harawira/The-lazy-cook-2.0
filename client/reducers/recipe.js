import { RECEIVE_RECIPE } from '../actions/index'

const recipe=(state =[], action) => {
  const {type,payload} = action

  switch (type) {
    case RECEIVE_RECIPE:
      return payload
    default:
      return state
     
  }
}

export default recipe



// state.filter((recipe) => recipe.category !==payload) 