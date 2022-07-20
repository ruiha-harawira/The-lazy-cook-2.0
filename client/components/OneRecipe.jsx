import React from 'react'
import { useDispatch } from 'react-redux'
import { removeRecipe } from '../actions/index'

function OneRecipe ({ data }) {
  const dispatch = useDispatch()

  return (
  <>
      {data ? (
        <div className='oneIngredient'>
          <p className='name'>{data.name}</p>
          <p>{data.description}</p>
          <p className='ingredients'>Ingredients:</p>
          <p>{data.ingredient1}</p>
          <p>{data.ingredient2}</p>
          <p>{data.ingredient3}</p>

          <img className='allRecipeImg' src={data.img} />
          <br/>
          <button className="btn-2" onClick={() => dispatch(removeRecipe(data.id))}>
            Delete
          </button>
        </div>
      ) : null}
    </>
  )
}

export default OneRecipe
