import React from 'react'
import { useDispatch } from 'react-redux'
import { removeRecipe } from '../actions/index'

function OneRecipe({ data }) {
  const dispatch = useDispatch()

  return (
    <>
      {data ? (
        <div>
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>Ingredients:</p>
          <p>{data.ingredient1}</p>
          <p>{data.ingredient2}</p>
          <p>{data.ingredient3}</p>

          <img src={data.img} />
          <button onClick={() => dispatch(removeRecipe(data.id))}>
            Delete
          </button>
        </div>
      ) : null}
    </>
  )
}

export default OneRecipe
