import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

import OneRecipe from './OneRecipe'

function Home () {
  const recipes = useSelector((state) => state.recipe)
  const recipe = recipes.find(element => {
    return element.id === 4
  })

  // console.log(recipes)
  return (
    <div>
      <h2>Recipes</h2>
      <div className='recipeOfTheDay'>
        <OneRecipe data={recipe} />
      </div>

      <div>
        <button>Vegetables</button>
        <button>Protein</button>
        <button>Grains</button>
      </div>
      <section>
        <div className='veggies'>
          <Wrapper>
            <h3>Vege</h3>
            <Splide
              options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}>
              {recipes.map((recipeVege) => {
                return (
                  <SplideSlide key = {recipeVege.id}>
                    <Card>
                      <Link to={'/recipe/' + recipeVege.id}>
                        <div className='front'>
                          <img src = {recipeVege.img} alt={recipeVege.name}/>
                        </div>
                        <div className='back'>
                          <p>{recipeVege.name}</p>
                          <p>{recipeVege.description}</p>
                        </div>
                      </Link>
                    </Card>
                  </SplideSlide>
                )
              })}

            </Splide>
          </Wrapper>
        </div>
      </section>

    </div>

  )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
.splide__list{
  display:flex;
}
`

const Card = styled.div`
min-height:25rem;
border-radius:2rem;
ovweflow:hidden;
position:relative;

 .front img{
  border-radius:2rem;
  position:absolute;
  z-index:10;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  transition: all 3s;
 };

 .front:hover{
  display:none;
 };
  
  .back{
  border-radius:2rem;

  background-color:blue;
  position:absolute;
  
  left:0%;
  color:white;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:20px;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:flex-end;
  text-decoration: none;
  background-color:dark;
 }
`
// const CardText = styled.div`
//   p:active{
//   display:none;
//   };
//   p:hover{
//   background-color:blue;
//   position:absolute;
//   z-index:10;
//   left:50%;
//   bottom:0%;
//   transform:translate(-50%,70%);
//   color:white;
//   width:100%;
//   text-align:center;
//   font-weight:600;
//   font-size:20px;
//   height:40%;
//   display:flex;
//   justify-content:center;
//   align-item:flex-end;
//   text-decoration: none;
//   background-color:blue;
//  }
// `

export default Home
//.filter(recipe => recipe.category === 'Vegetables').