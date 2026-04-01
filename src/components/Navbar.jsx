import React from 'react';
import Logo from '../assets/DigiTools.png';

const Navbar = ({ cartValue }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50 px-4 lg:px-8 w-full">
        
     
        <div className="navbar-start">
        
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
           
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>

          <a className="btn btn-ghost p-0 hover:bg-transparent">
         
            <span className="text-2xl md:text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
              DigiTools
            </span>
          </a>
        </div>

       
        <div className="navbar-center hidden lg:flex text-sm font-semibold">
          <ul className="menu menu-horizontal px-1">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>


        <div className="navbar-end flex gap-1 md:gap-4">
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item bg-red-600 rounded-full text-white">{cartValue}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-1 md:gap-3 items-center">
    
            <button className="btn btn-sm md:btn-md bg-transparent border-none font-bold px-2">
              Login
            </button>
            <button className="btn btn-sm md:btn-md rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;