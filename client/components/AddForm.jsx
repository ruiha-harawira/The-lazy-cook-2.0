import React, { useState } from 'react'

function AddForm(props) {
const [formData, setFormData] = useState({
  name:'',
  // RADIO BUTTONS
  description:'',
})

const handleSubmit = (e) => {
  e.preventDefault()
  const newRecipe = formData

  setFormData({
    name:'',
    //RADIO BUTTONS
    description: '',
  })

  addNewRecipe(newRecipe)

  .then(() =>{

    props.refreshRecipes()
  }).catch((err) => {
    console.log(err)
  })
}

const handleChange = (e) => {
  console.log(e.target, e.target.value)
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

  return (
    <div>


    </div>
  )
}

export default AddForm