import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User icon for profile
import { IoIosLogOut } from 'react-icons/io';  // Log out icon

function Header() {
  return (
    <header className="bg-red-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Branding */}
        <Link to="/" className="text-3xl font-bold">
          task<span className='text-2xl font-semibold'>manager</span>
        </Link>

 

        {/* Navigation Icons */}
        <div className="flex items-center space-x-4">
          {/* Home Link */}
          <Link to="/" className="text-red-100 hover:text-white">
            Home
          </Link>

          {/* User Profile Link */}
          <Link to={"/profile"} className="text-red-100 hover:text-white">
            <FaUserCircle className="text-2xl" />
          </Link>

          {/* Logout Button */}
          <button className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg flex items-center">
            <IoIosLogOut className="mr-1" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
