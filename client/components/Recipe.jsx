import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeRecipe } from '../actions/index'

function Recipe() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const recipes = useSelector((state) => state.recipe)
  const data = recipes.find((element) => {
    return element.id == id
  })
  return (
    <>
      {data ? (
        <div className="oneRecipe">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <h3>Ingredients:</h3>
          <p>{data.ingredient1}</p>
          <p>{data.ingredient2}</p>
          <p>{data.ingredient3}</p> <img src={data.img} />
          <br />
          <button
            className="btn-2"
            onClick={() => dispatch(removeRecipe(data.id))}
          >
            Delete
          </button>
        </div>
      ) : null}
    </>
  )
}

export default Recipe
