import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Title from './component/Main/Title'
import { useEffect, useState } from 'react'
import Recipes from './component/Recipes/Recipes'

function App() {
  const [recipes, setRecipes] = useState([]);


  useEffect(()=>{
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='grid grid-cols-2'>
      {
        recipes.map(recipe => <Recipes recipe={recipe}></Recipes> )
      }
      </div>
     </>
  )
}

export default App
