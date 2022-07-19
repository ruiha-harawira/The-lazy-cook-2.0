import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { removeRecipe } from '../actions/index'


function Recipe() {
  const dispatch = useDispatch()
  const { id } = useParams()
    const recipes = useSelector((state) => state.recipe)
    const data = recipes.find(element => {
      return element.id == id
    })
  return (
    <>
    {data?
    <div>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <p>Ingredients:</p>
      <p>{data.ingredient1}</p>
      <p>{data.ingredient2}</p>
      <p>{data.ingredient3}</p>      <img src={data.img} />
      <button onClick={()=> dispatch(removeRecipe(data.id))}>Delete</button>
    </div>:null}
   
  </>
  )
}

export default Recipe