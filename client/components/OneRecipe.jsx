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
          <p>{JSON.parse(data.ingredients).join('hello')}</p>
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
