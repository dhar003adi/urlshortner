import React from "react";
import Loginimg from '../Assets/Ad.jpg'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=" opacity-75 bg-gradient-to-r from-[#41295a] to-[#2F0743] p-4 shadow-md flex justify-between items-center ">
        <div>
      <ul className="flex space-x-4 ">
            
            <li>
            <Link to="/" className=" hover:underline font-extrabold  text-xl text-white">Dashboard</Link>
            </li> 
      </ul>
      </div>

      <div>
        <ul className="flex space-x-4">
            <li>
            <Link to="/login" className="shadow-md hover:bg-red-300 bg-gray-400 text-gray-800 px-4 py-2 rounded uppercase">Login</Link>
            </li>
            <li>
            <Link to="/register" className=" shadow-md hover:bg-[#F99417] bg-gray-400 text-gray-800 px-4 py-2 rounded uppercase">Register</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
