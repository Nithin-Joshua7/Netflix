import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authUser';

function Navbar() {
  const { logout } = useAuthStore();
  const [isMobilemenuOpen, setMobileMenuOpen] = useState(false);
  const togglemenu = () => setMobileMenuOpen(!isMobilemenuOpen);

  return (
    <header className='max-w-6xl mx-auto flex items-center justify-between p-4 h-20 relative'>

      {/* Left: Logo */}
      <div className='flex items-center z-50'>
        <Link to='/'>
          <img src="/netflix-logo.png" alt="netflix-logo" className='w-32 sm:w-40' />
        </Link>
      </div>

      {/* Center: Title */}
      <div className='absolute left-1/2 transform -translate-x-1/2 z-0'>
        <h1 className='text-white text-lg sm:text-xl font-semibold whitespace-nowrap'>
          This is Home page
        </h1>
      </div>

      {/* Right: Logout Button (Desktop only) */}
      <div className='hidden sm:block z-50'>
        <button
          onClick={logout}
          className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition'
        >
          Logout
        </button>
      </div>

      

      {/* Mobile Dropdown */}
      {isMobilemenuOpen && (
        <div className='w-full sm:hidden mt-4 z-40 bg-black border rounded border-gray-800 absolute top-full left-0'>
          <div className='flex flex-col gap-2 p-4'>
            <h1 className='text-white text-base text-center'>This is Home Page</h1>
            <button
              onClick={logout}
              className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition'
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
