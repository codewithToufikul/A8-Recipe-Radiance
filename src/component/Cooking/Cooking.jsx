

const Cooking = () => {
    return (
        <div className="border-4 rounded-2xl">
            <h1 className="text-2xl font-medium text-center mx-7 p-2 
            border-b-2">Want to Cook: </h1>
            <div className="grid grid-cols-3 p-8">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            <h1 className="text-2xl font-medium text-center p-2 border-b-2">Currently cooking: </h1>
        </div>
    );
};

export default Cooking;