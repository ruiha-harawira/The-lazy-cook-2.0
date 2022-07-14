import React from 'react'


function OneRecipe({data}) {

  return (
    <>
   <p>{data.name}</p>
   <p>{data.description}</p>
   <p>{data.ingredients}</p>
   <img src={data.img} />
  </>
  )
}

export default OneRecipe