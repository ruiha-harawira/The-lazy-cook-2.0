import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'
import SearchRecipe from './SearchRecipe'

function Home () {
  const recipes = useSelector((state) => state.recipe)

  const id = Math.floor(Math.random() * recipes.length) + 1
  const recipe = recipes.find((element) => {
    return element.id === id
  })
  console.log(id, recipe)
  return (
    <div>
      {/*
      <div className='recipeOfTheDay'>
        {recipe?<div>
          <img src={recipe.img} />
            <h2>Recipe of the moment</h2>
        <p>{recipe.name}</p>
        </div>:null
        }

      </div> */}

      <div className="banner">
        <h2>Three ingredients cooking</h2>
        <img src="/images/banner.jpg" className="background" />
        <p>
          <SearchRecipe />
        </p>

        <div className="category">
          <button>
            <a href="#vege">Vegetables</a>
          </button>
          <button>
            <a href="#protein">Protein</a>
          </button>
          <button>
            <a href="#grains">Grains</a>
          </button>
        </div>
      </div>

      <section>
        <div className="veggies">
          <Wrapper>
            <h3 id="vege">Vegetables</h3>

            <Splide
              options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}
            >
              {recipes
                .filter((recipe) => recipe.category === 'Vegetables')
                .map((recipeVege) => {
                  return (
                    <SplideSlide key={recipeVege.id}>
                      <Card>
                      
                        <Link to={'/recipe/' + recipeVege.id}>
                          
                        
                          <div className="front">
                            <img src={recipeVege.img} alt={recipeVege.name} />
                          </div>
                          <div className="back">
                            <p>{recipeVege.name}</p>
                            <p>
                              {recipeVege.ingredient1} <br />
                              {recipeVege.ingredient2} <br />
                              {recipeVege.ingredient3} <br />
                            </p>
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
        <div className="protein">
          <Wrapper>
            <h3 id="protein">Protein</h3>
            <Splide
              options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}
            >
              {recipes
                .filter((recipe) => recipe.category === 'Protein')
                .map((recipeProtein) => {
                  return (
                    <SplideSlide key={recipeProtein.id}>
                      <Card>
                        <Link to={'/recipe/' + recipeProtein.id}>
                          <div className="front">
                            <img
                              src={recipeProtein.img}
                              alt={recipeProtein.name}
                            />
                          </div>
                          <div className="back">
                            <p>{recipeProtein.name}</p>
                            <p>
                              {recipeProtein.ingredient1} <br />
                              {recipeProtein.ingredient2} <br />
                              {recipeProtein.ingredient3} <br />
                            </p>
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
        <div className="grains">
          <Wrapper>
            <h3 id="grains">Grains</h3>
            <Splide
              options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
              }}
            >
              {recipes
                .filter((recipe) => recipe.category === 'Grains')
                .map((recipeGrains) => {
                  return (
                    <SplideSlide key={recipeGrains.id}>
                      <Card>
                        <Link to={'/recipe/' + recipeGrains.id}>
                          <div className="front">
                            <img
                              src={recipeGrains.img}
                              alt={recipeGrains.name}
                            />
                          </div>
                          <div className="back">
                            <p>{recipeGrains.name}</p>
                            <p>
                              {recipeGrains.ingredient1} <br />
                              {recipeGrains.ingredient2} <br />
                              {recipeGrains.ingredient3} <br />
                            </p>
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
  .splide__list {
    display: flex;
  }
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  ovweflow: hidden;
  position: relative;

  .front img {
    border-radius: 2rem;
    position: absolute;
    z-index: 10;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-transition: -webkit-transform 200ms ease-in-out;
    -moz-transition: -moz-transform 200ms ease-in-out;
    -o-transition: -o-transform 200ms ease-in-out;
    transition: transform 200ms ease-in-out;
  }

  .front img:hover {
    opacity: 0;
  }

  .back {
    border-radius: 2rem;

    background-color: blue;
    position: absolute;

    left: 0%;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: flex-end;
    text-decoration: none;
    background-color:#67bf7d;
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
