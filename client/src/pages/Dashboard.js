import React from 'react';
import './Dashboard.css';
import Header from '../components/header1';
import Footer from '../components/footer';

import Contact from '../components/contact'


function Dashboard() {
  
  
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

  <p>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 class="py-4 title-font sm:text-5xl font-medium text-gray-900">Welcome to CP Portal</h1>         
      <p class="py-10 mb-4 leading-relaxed text-black">
      <ul class="list-disc">
        <li class="m-1 text-2x1">Here, you can access competitive programming websites such as Codeforces.</li>
        <li class="m-1">You will be notified about various competitive programming contests.</li> 
        <li class="m-1">You will get random problem recommendations based on the problem rating and topic constraints.</li></ul> </p>
      <div class="flex justify-center ">
        <a href='https://codeforces.com/' class=" inline-flex text-white bg-black border-0 ml-0 mr-8 mt-1 py-2 px-6 text-3xl focus:outline-none hover: rounded text-lg">Codeforces</a>     
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="Error img not found" src="image/CP.jpg"></img>
    </div>
  </div>
</section>


<div class="container mx-auto flex px-5 pt-24 pb-8 mt-24 md:flex-row flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 class="py-5 title-font sm:text-5xl text-3xl  font-medium text-gray-900">Practice Problems</h1>         
      <p class="py-10 mb-4 leading-relaxed">
        <ul class="list-disc">
        <li >You can practice problems of various topics according to your rating.</li>
        <li> You can choose the problem of your rating and practice them to improve your competitive programming skills.</li> 
        <li>There are problems for beginners to experienced programmers.</li></ul> </p>
        </div>
        </div>

        <div class="container mx-auto flex px-5 pt-24 pb-8 mt-24 md:flex-row flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 class="py-5 title-font sm:text-5xl text-3xl  font-medium text-gray-900">Contests</h1>         
      <p class="py-10 mb-4 leading-relaxed">
        <ul class="list-disc">
        <li >There are contests of Codeforeces.</li>
        <li>Contests occur in 3-4 days.</li> 
        <li>There are various contests for beginners to experienced programmers.</li></ul> </p>
        </div>
        </div>
  </p>
  
</section>


        <Contact/>
       
      <Footer/>
    </div>
  );
}

export default Dashboard;
