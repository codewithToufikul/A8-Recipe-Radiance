import banner from '../../images/banner.png'

const Banner = () => {
    return (
        <div className='mt-11 mx-2'>
            <div className="hero h-[600px] rounded-3xl" style={{backgroundImage:  `url(${banner})`}}>
            <div className="hero-overlay bg-opacity-0 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:max-w-3xl">
                <h1 className="mb-5 lg:text-5xl text-3xl font-bold  lg:leading-[60px]">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <button className="btn bg-[#0BE58A] border-none rounded-3xl">Explore Now</button>
                <button className="btn btn-outline rounded-3xl border-white text-white ml-5">Our Feedback</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;