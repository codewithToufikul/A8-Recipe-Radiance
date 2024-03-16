

const Cook = ({recipe}) => {
    console.log(recipe);
    const {recipe_id, recipe_name, preparing_time, calories} = recipe
    return (
        <div className="grid grid-cols-4 gap-4 px-2 py-4 items-center">
            <p className="font-medium">{recipe_name}</p>
            <p>{preparing_time} minutes</p>
            <p>{calories}</p>
            <button className="btn bg-[#0BE58A] rounded-full p-1">Preparing</button>
        </div>
    );
};

export default Cook;