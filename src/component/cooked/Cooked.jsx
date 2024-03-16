

const Cooked = ({item, index}) => {
    console.log(item);
    const {recipe_id, recipe_name, preparing_time, calories} = item;
    return (
        <div>
            <div className=" grid grid-cols-10 items-center gap-4 p-3 bg-slate-100">
            <p className=" col-span-1 text-xl font-semibold">{index+1}</p>
            <p className="col-span-3 font-semibold p-2">{recipe_name}</p>
            <p className="col-span-3 font-medium">{preparing_time} minutes</p>
            <p className="col-span-3 font-medium">{calories} Calories</p>
            
            </div>
        </div>
    );
};

export default Cooked;