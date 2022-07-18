
import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';


function SearchRecipe() {
  const navigate = useNavigate()
  const [search, setSearch]=useState('')

  const handleTyping = (e)=>{
    setSearch(e.target.value)
  }

  const handleSubmit=(e)=>{
   
    e.preventDefault()
    navigate('/all/'+search) 
    console.log(search) 
   
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        
        <input onChange={handleTyping} name='search'  value={search} type='text' />
      </label>
      <button>Done</button>
    </form>
    {/* {search.map((item)=>{
      return(
        <h4>{item.name}</h4>
      )
    })} */}
 
    </>
  )
}

export default SearchRecipe