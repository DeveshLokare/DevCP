import React from 'react';
import './Dashboard.css';
import Header from '../components/header1';
import Footer from '../components/footer';

import Contact from '../components/contact'


function Home() {
  
  
  const auth = ()=>{
    const token = localStorage.getItem('token')
    if(token)
    {
      window.location.href = '/home'
      }
  }
  return (
    <div className="Home">
      {auth()}
    <Header/>
    <section class="text-gray-600 body-font ">
  <h1 className=' text-4xl font-bold '>Welcome to CP Portal !!</h1>
  <p></p>
  
</section>



        <Contact/>
       
      <Footer/>
    </div>
  );
}

export default Home;
