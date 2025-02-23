import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import Fire from '../../images/fire.png'

const Recipes = ({recipe, handleRecipe}) => {
    const {recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} = recipe
    return (
        <div>
            <div className="card lg:w-96 lg:h-[700px] bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img className="" src={recipe_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title lg:text-2xl">{recipe_name}</h2>
                <p className="lg:pb-4">{short_description}</p>
                <div className="border-t-2 pt-2 lg:pt-4">
                    <h3 className="lg:text-xl font-semibold pb-3">Ingredients: {ingredients.length}</h3>
                    {
                        ingredients.map(ingredient => <li className="text-[#878787] text-lg font-normal">{ingredient}</li>)
                    }
                <div className='flex gap-5 py-7'>
                    <div className='flex items-center gap-2'>
                        <p><FontAwesomeIcon icon={faClock} /></p>
                        <p className='lg:text-lg'>{preparing_time} minutes</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={Fire} alt="" />
                        <p className='lg:text-lg'>{calories} Calories</p>
                    </div>
                </div>
                </div>
                <div className="card-actions">
                <button onClick={()=>handleRecipe(recipe)} className="btn bg-[#0BE58A] rounded-3xl px-4 text-base">Want to Cook</button>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipes;