import { RECEIVE_RECIPE, ADD_RECIPE, DEL_RECIPE} from '../actions/index'

const recipe=(state =[], action) => {
  const { type,payload } = action

  switch (type) {
    case RECEIVE_RECIPE:
      return payload
      case ADD_RECIPE:
        return[...state,payload]
        case DEL_RECIPE:
          return state.filter((id) => recipe.id !==payload)
    default:
      return state
     
  }
}

export default recipe



// state.filter((recipe) => recipe.category !==payload) 