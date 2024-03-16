import Cook from "./cook/Cook";


const Cooking = ({recipeItem}) => {
    return (
        <div className="border-4 rounded-2xl">
            <h1 className="text-2xl font-medium text-center mx-7 p-2 
            border-b-2">Want to Cook: {recipeItem.length} </h1>
            <div className="grid grid-cols-4 p-8">
                <p className="text-xl">Name</p>
                <p className="text-xl">Time</p>
                <p className="text-xl">Calories</p>
            </div>
            {
                recipeItem.map(recipe => <Cook recipe={recipe}></Cook>)
            }
            <h1 className="text-2xl font-medium text-center p-2 border-b-2">Currently cooking: </h1>
            <div className="grid grid-cols-3 p-8">
                <p className="">Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
        </div>
    );
};

export default Cooking;