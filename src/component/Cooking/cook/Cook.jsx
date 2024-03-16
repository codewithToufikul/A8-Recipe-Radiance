

const Cook = ({recipe, index, handleCurentlyCooking}) => {
    console.log(recipe);
    const {recipe_id, recipe_name, preparing_time, calories} = recipe
    return (
        <div className="grid grid-cols-10 gap-4 p-2 rounded-2xl items-center mb-5 bg-slate-200">
            <p className="col-span-1 lg:pl-4 pl-2 lg:font-semibold">{index+1}</p>
            <p className="lg:font-medium col-span-2">{recipe_name}</p>
            <p className="col-span-2">{preparing_time} minutes</p>
            <p className="col-span-2">{calories} Calories</p>
            <button onClick={()=>handleCurentlyCooking(recipe, recipe_id, preparing_time, calories)} className="btn col-span-3 bg-[#0BE58A] lg:rounded-full lg:py-2 col-span-2 text-xs lg:text-lg">Preparing</button>
            
            
        </div>
    );
};

export default Cook;