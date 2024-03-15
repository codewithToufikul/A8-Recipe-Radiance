import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-regular-svg-icons';
import scearch from '../../images/scearch.jpg'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li>
        <a href="">Recipes</a>
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      <li>
      <label className=" input input-bordered rounded-3xl flex items-center gap-2 mr-3">
    
    <img src={scearch} alt="" />
    <input type="text" className="grow" placeholder="Search" />
    </label>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost lg:text-3xl text-xl lg:font-bold lg:ml-[-20px]">Recipe Radiance</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a href="">Recipes</a>
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <div className='md:block hidden'>
    <label className=" input input-bordered rounded-3xl flex items-center gap-2 mr-3">
    
    <button><img src={scearch} alt="" /></button>
    <input type="text" className="grow" placeholder="Search" />
    </label>
    </div>
    <a className="p-2 px-3 text-2xl bg-[#0BE58A] rounded-full font-light"><FontAwesomeIcon icon={faCircleUser} /></a>
  </div>
</div>
        </div>
    );
};

export default Navbar;