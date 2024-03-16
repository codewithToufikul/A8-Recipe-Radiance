

const Recipes = ({recipe}) => {
    console.log(recipe);
    const {recipe_name, short_description, ingredients} = recipe
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p className="pb-4">{short_description}</p>
                <div className="border-t-2 pt-4">
                    <h3 className="text-xl font-semibold">Ingredients: {ingredients.length}</h3>
                    {
                        ingredients.map(ingredient => <li className="text-[#878787] text-lg font-normal">{ingredient}</li>)
                    }
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
                </div>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipes;