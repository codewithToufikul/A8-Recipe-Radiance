import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Title from './component/Main/Title'
import { useEffect, useState } from 'react'
import Recipes from './component/Recipes/Recipes'
import Cooking from './component/Cooking/Cooking'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeItem, setRecipeItem] = useState([]);
  const [recipeCooking, setRecipeCooking] = useState([]);
  const [times, setTime] = useState(0);
  const [recipeCalories, setRecipeCalories] = useState(0)


  useEffect(()=>{
    fetch('./recipe.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

  const handleRecipe = (recipe) =>{
    // const cookDetails = [];
    const isExid = recipeItem.find(cookDetail => cookDetail.recipe_id == recipe.recipe_id);
    if(!isExid){
      setRecipeItem([...recipeItem, recipe]);
    }
    else{
      toast("Already Exist  !")
    }
    
    
  }
  const handleCurentlyCooking = (recipe, id, time, calories) =>{
    const newRecipeCooking = [...recipeCooking, recipe];
    setRecipeCooking(newRecipeCooking)
    const newItem = recipeItem.filter(item => item.recipe_id !== id);
    setRecipeItem(newItem);
    const cookTime = parseInt(time)
    const newTimes = (times + cookTime);
    setTime(newTimes)
    const cookCalo = parseInt(calories)
    const newCalories = (recipeCalories + cookCalo);
    setRecipeCalories(newCalories)
    
    
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className='grid lg:grid-cols-5 grid-cols-1 mt-11'>
        <div className='lg:col-span-3 mx-2'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
        {
          recipes.map(recipe => <Recipes 
            key={recipe.id}
            recipe={recipe} 
            handleRecipe={handleRecipe}
            ></Recipes> )
            
        }
        </div>
        </div>
        <div className='col-span-2 m-3 ml-4'>
          <Cooking recipeItem={recipeItem} handleCurentlyCooking={handleCurentlyCooking} recipeCooking={recipeCooking} times={times} recipeCalories={recipeCalories}></Cooking>
        </div>
      </div>
      <ToastContainer />
     </>
  )
}

export default App
