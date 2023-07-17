import '../pages/Home';
import '../App';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header1.css';


function Header1() {
    return(
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
          src="canva1.png"
          class="rounded-full h-28 w-28"
          
          alt=""
          loading="lazy"/>
            {/* <span className="ml-3 text-xl">CP Portal</span> */}
          </a>
          {/* <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink className="nav" to="/">Home</NavLink>
            <NavLink className="nav" to="/problem" >Problem Set</NavLink>
            <NavLink className="nav" to="/contests">Contests</NavLink>
            <NavLink className="nav" to="/feedback">Feedback</NavLink>
          </nav> */}
          <div class=" flex  justify-end w-10/12 ">
        <a href='/login'  className=" inline-flex text-white bg-black border-0 ml-4 mr-2 mt-1 py-2 px-6 focus:outline-none hover: rounded-full text-lg">Login</a>
        <a href='/register' className="inline-flex text-white bg-black border-0 ml-4 mr-0 mt-1 py-2 px-6 focus:outline-none hover: rounded-full text-lg">Register</a>
        
      </div>
        </div>
      </header>
    );
}

export default Header1;