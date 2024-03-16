import Cooked from "../cooked/Cooked";
import Cook from "./cook/Cook";


const Cooking = ({recipeItem, handleCurentlyCooking, recipeCooking, times, recipeCalories}) => {
    
    return (
        <div className="border-4 rounded-2xl">
            <h1 className="text-2xl font-medium text-center mx-7 p-2 
            border-b-2">Want to Cook: {recipeItem.length} </h1>
            <div className="grid grid-cols-4 p-8 pl-12">
                <p className="text-xl">Name</p>
                <p className="text-xl">Time</p>
                <p className="text-xl">Calories</p>
            </div>
            {
                recipeItem.map((recipe, index) => <Cook key={recipe.id} recipe={recipe} index={index} handleCurentlyCooking={handleCurentlyCooking}></Cook>)
            }
            <h1 className="text-2xl font-medium text-center p-2 border-b-2">Currently cooking: {recipeCooking.length} </h1>
            <div className="grid grid-cols-3 p-8 ml-8">
            <p className="text-xl">Name</p>
                <p className="text-xl">Time</p>
                <p className="text-xl">Calories</p>
            </div>

            {
                recipeCooking.map((item, index) => <Cooked key={item.id} item={item} index={index}></Cooked>)
            }
            <div className=" flex justify-end gap-10 px-8 py-5 text-lg">
            <p className="">Total Time = <br />
             {times} Minutes</p>
            <p>Total Calories = <br />
             {recipeCalories} Calories</p>
            </div>
        </div>
    );
};

export default Cooking;