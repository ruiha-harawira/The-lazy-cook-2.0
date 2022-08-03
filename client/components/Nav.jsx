// import React from 'react'
// import { Link } from 'react-router-dom'

// import { useSelector } from 'react-redux'

// function Nav () {

//   return (
//     <>
//       <nav>
//         <div className='nav'>
//           <p><Link to="/">Home</Link></p>
//           <p><Link to="/all">Recipes</Link></p>
//           <p><Link to="/add">Add recipe</Link></p>
//         </div>

//       </nav>

//     </>
//   )
// }

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Nav () {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all">Recipes</Link>
        </li>
        <li>
          <Link to="/add">Add Recipe</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  )
}

export default Nav
