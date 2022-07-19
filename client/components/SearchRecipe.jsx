import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchRecipe () {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleTyping = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/all/' + search)
    console.log(search)
  }
  return (
    <>
      <div >
        <form onSubmit={handleSubmit}>
          <label>

            <input onChange={handleTyping} name='search' value={search} type='text' >

            </input>
          </label>
          <button>Search</button>
        </form>
      </div>
    </>

  )
}

export default SearchRecipe
