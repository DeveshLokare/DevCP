import '../App';
import React from 'react';
import { NavLink } from 'react-router-dom';

import "./footer.css"

function footer(){

    return(
        <footer className='relative'>
             <div class="container mx-auto  p-1  items-center absolute bg-black">
          
           <nav class=" flex flex-col flex-wrap items-center justify-center align-center relative z-10 text-white p-5">
           
         <img
          src="canva1.png"
          class="rounded-full h-28 w-28 "
          
          alt=""
          loading="lazy"/> 
          
          <p>
          &copy; copyright : 2023 CP Portal 
          </p>
          
          <p>
            All rights reserved
          </p>
            
          </nav> 
        </div>
       
        </footer>
    )
}

export default footer;