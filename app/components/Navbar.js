"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="px-4 py-4  text-white">
      <div className="container mx-auto flex items-center justify-between">
        
        <Link href="/" className="flex items-center text-lg lg:text-2xl font-bold text-white">
          <span>VYB <span className="text-sm font-normal">STORE</span></span>
        </Link>

       
        <div className="flex items-center bg-white px-2 text-xs lg:text-md rounded-full  max-w-xs md:max-w-md lg:max-w-lg mx-2">
          <FiSearch className="text-gray-400 " />
          <input
            type="text"
            placeholder="Search Creator/Product"
            className="border-none outline-none w-36 lg:w-64 p-1 rounded-full text-base"
          />
        </div>

       
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

    
        <div className={`flex-col md:flex-row md:flex items-center ${isMenuOpen ? 'flex' : 'hidden'} md:static absolute top-16 left-0 w-full md:w-auto md:space-x-8 bg-[#011111] md:bg-transparent p-4 md:p-0 mt-4 z-50`}>
          <Link href="/favcreators" className="text-white block px-3 py-2 md:p-0">Fav Creators</Link>
          <Link href="/merchandise" className="text-white block px-3 py-2 md:p-0">Merchandise</Link>
          <Link href="/brand" className="text-white block px-3 py-2 md:p-0">Brand</Link>
          <Link href="/digital" className="text-white block px-3 py-2 md:p-0">Digital</Link>

          <div className="relative mt-4 md:mt-0">
            <button onClick={toggleDropdown} className="flex items-center bg-white p-2 rounded-full text-[#1a1a1a]">
              <FiUser className="mr-2" />
              <span>▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full right-0 bg-gray-700 rounded-lg shadow-lg list-none py-2 z-10">
                <li><Link href="/profile" className="text-white block px-4 py-2">Profile</Link></li>
                <li><Link href="/dashboard" className="text-white block px-4 py-2">Dashboard</Link></li>
                <li><Link href="/mystore" className="text-white block px-4 py-2">My Store</Link></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
