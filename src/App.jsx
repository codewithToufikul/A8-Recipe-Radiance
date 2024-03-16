import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Title from './component/Main/Title'
import { useEffect, useState } from 'react'
import Recipes from './component/Recipes/Recipes'
import Cooking from './component/Cooking/Cooking'

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
      <div className='grid md:grid-cols-5 grid-cols-1 mt-11'>
        <div className='md:col-span-3'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
        {
          recipes.map(recipe => <Recipes recipe={recipe}></Recipes> )
        }
        </div>
        </div>
        <div className='col-span-2 m-3 ml-4'>
          <Cooking></Cooking>
        </div>
      </div>
     </>
  )
}

export default App
