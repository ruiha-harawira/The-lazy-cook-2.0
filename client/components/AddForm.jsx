import React, { useState } from 'react'

function AddForm(props) {
const [formData, setFormData] = useState({
  name:'',
  category:'',
  ingredients:'',
  description:'',
  img:'',
})

const handleSubmit = (e) => {
  e.preventDefault()
  const newRecipe = formData

  setFormData({
    name:'',
    category:'',
    ingredients:'',
    description: '',
    img:'',
  })

  dispatch(addNewRecipe(newRecipe))

}

const handleChange = (e) => {
  console.log(e.target, e.target.value)
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' type='text' value={formData.name} onChange={handleChange}/>
        <br/>
        <label for='vegetable'>Vegetable</label>
        <input type='radio' id='vegetable' name='category' value={formData.category} onChange={handleChange}/>
        <label for='protein'>Protein</label>
        <input type='radio' id='protein' name='category' value={formData.category} onChange={handleChange}/>
        <label for='grains'>Grains</label>
        <input type='radio' id='grains' name='category' value={formData.category} onChange={handleChange}/>
        <br/>
        <label htmlFor='ingredients'>Ingredients:</label>
        <input id='ingredients' name='ingredients' type='text' value={formData.ingredients} onChange={handleChange}/>
        <br/>
        <label htmlFor='description'>Description:</label>
        <input id='name' name='name' type='text' value={formData.description} onChange={handleChange}/>
        <br/>
        <label htmlFor='img'>Upload image:</label>
        <input type="file" id="myFile" name="filename"/>


        <br/>
        <button>Send</button>

        
      </form>


    </>
  )
}

export default AddForm