import React from 'react'
import { useDispatch } from 'react-redux'
import { removeRecipe } from '../actions/index'

function OneRecipe({ data }) {
  const dispatch = useDispatch()

  return (
    <>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <p>{data.ingredients}</p>
      <img src={data.img} />
      <button onClick={() => dispatch(removeRecipe(data.id))}>Delete</button>
    </>
  )
}

export default OneRecipe
