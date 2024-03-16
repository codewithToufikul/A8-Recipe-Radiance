

const Cook = ({recipe, index}) => {
    console.log(recipe);
    const {recipe_id, recipe_name, preparing_time, calories} = recipe
    return (
        <div className="grid grid-cols-10 gap-4 px-2 items-center mb-5">
            <p className="col-span-1 pl-4">{index+1}</p>
            <p className="font-medium col-span-2">{recipe_name}</p>
            <p className="col-span-2">{preparing_time} minutes</p>
            <p className="col-span-2">{calories}</p>
            <button className="btn bg-[#0BE58A] rounded-full py-2 col-span-2">Preparing</button>
        </div>
    );
};

export default Cook;