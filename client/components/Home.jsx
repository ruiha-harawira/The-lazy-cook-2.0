import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

import OneRecipe from './OneRecipe'

function Home () {
  
  const recipes = useSelector((state) => state.recipe)
    
  const id= Math.floor(Math.random()*recipes.length)
  const recipe = recipes.find(element => {
    return element.id === id
  })

  return (
    <div>
      <h2>Recipes</h2>
      <div className='recipeOfTheDay'>
        <OneRecipe data={recipe} />
      </div>

      <div>
        <button><a href='#vege'>Vegetables</a></button>
        <button><a href='#protein'>Protein</a></button>
        <button><a href='#grains'>Grains</a></button>
      </div>
      <section>
        <div className='veggies'>
          <Wrapper>
            <h3 id='vege'>Vege</h3>
            <Splide
              options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}>
              {recipes.filter(recipe => recipe.category === 'Vegetables').map((recipeVege) => {
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
      <section>
        <div className='protein'>
          <Wrapper>
            <h3 id='protein'>Protein</h3>
            <Splide
              options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}>
              {recipes.filter(recipe => recipe.category === 'Protein').map((recipeProtein) => {
                return (
                  <SplideSlide key = {recipeProtein.id}>
                    <Card>
                      <Link to={'/recipe/' + recipeProtein.id}>
                        <div className='front'>
                          <img src = {recipeProtein.img} alt={recipeProtein.name}/>
                        </div>
                        <div className='back'>
                          <p>{recipeProtein.name}</p>
                          <p>{recipeProtein.description}</p>
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
      <section>
        <div className='Grains'>
          <Wrapper>
            <h3 id='grains'>Grains</h3>
            <Splide
              options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}>
              {recipes.filter(recipe => recipe.category === 'Grains').map((recipeGrains) => {
                return (
                  <SplideSlide key = {recipeGrains.id}>
                    <Card>
                      <Link to={'/recipe/' + recipeGrains.id}>
                        <div className='front'>
                          <img src = {recipeGrains.img} alt={recipeGrains.name}/>
                        </div>
                        <div className='back'>
                          <p>{recipeGrains.name}</p>
                          <p>{recipeGrains.description}</p>
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
  -webkit-transition: -webkit-transform 200ms ease-in-out;
-moz-transition: -moz-transform 200ms ease-in-out;
-o-transition: -o-transform 200ms ease-in-out;
transition: transform 200ms ease-in-out;

 };

 .front img:hover{
  opacity:0;
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
