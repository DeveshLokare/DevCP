import '../pages/Home1';
import '../App';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';



function Header() {

  const handleLogout = () => {
    // window.confirm("Do you want to Log Out?")
    localStorage.removeItem('token');
    window.location.href = '/';
      
  }
  
    
  
    return(
           <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
          src="canva1.png"
          class="rounded-full h-28 w-28"
          
          alt=""
          loading="lazy"/>
           
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink className="nav" to="/home">Home</NavLink>
            <NavLink className="nav" to="/problem" >Problem Set</NavLink>
            <NavLink className="nav" to="/contests">Contests</NavLink>
            <NavLink className="nav" to="/feedback">Feedback</NavLink>
          </nav>
          <form action="/logout" method="POST" >
          <button class="inline-flex items-center text-white bg-black border-0 py-1 px-5 focus:outline-nred rounded-full text-base mt-4 md:mt-0 mr-8" onClick={handleLogout} >Logout
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
           </form>
        </div>
      </header>
    );
}

export default Header;