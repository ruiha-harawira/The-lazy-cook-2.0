import React from 'react'


function OneRecipe({data}) {

  return (
    <>
    {data 
    ? <div> 
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{data.ingredients}</p>
        <img src={data.img} />
    </div>
    : null}
  
  </>
  )
}

export default OneRecipe