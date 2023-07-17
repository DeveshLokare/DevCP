import React from 'react';
import './Home.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { json, useNavigate } from 'react-router-dom';


function Home() {
  const navigate= useNavigate();
  const goToContests=() =>{
    navigate('/contests')
  }
  const goToProblems=() =>{
    navigate('/problem')
  }

  const auth = ()=>{
    console.log("start")
    const token = localStorage.getItem('token')
    console.log(token)
    if(!token){
      window.location.href = '/'
      alert("Access denied!")
    }
  }
  
  return (
   <div>
   {auth()}
    <div className="Home">
    <Header/>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 class="py-4 title-font sm:text-4xl text-3xl  font-medium text-gray-900">Welcome to CP Portal</h1>         
      <p class="py-10 mb-4 leading-relaxed text-black">
      <ul class="list-disc">
        <li class="m-1">Here, you can access many competitive programming websites such as Codeforces,Leetcode,etc.</li>
        <li class="m-1">You will be notified about various competitive programming contests.</li> 
        <li class="m-1">You will get random problem recommendations based on the problem rating and topic constraints.</li></ul> </p>
      <div class="flex justify-center ">
        <a href='https://codeforces.com/' target="_blank" class=" inline-flex text-white bg-black border-0 ml-0 mr-8 mt-1 py-2 px-6 focus:outline-none hover: rounded text-lg">Codeforces</a>
        <a href='https://www.leetcode.com' target="_blank" class=" inline-flex text-white bg-black border-0 ml-8 mr-8 mt-1 py-2 px-6 focus:outline-none hover: rounded text-lg">Leetcode</a>
        
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="Error img not found" src="image/CP.jpg"></img>
    </div>
  </div>
  
</section>


<div class="container mx-auto flex px-5 pt-24 pb-8 mt-24 md:flex-row flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 class="py-5 title-font sm:text-4xl text-3xl  font-medium text-gray-900">Practice Problems</h1>         
      <p class="py-10 mb-4 leading-relaxed">
        <ul class="list-disc">
        <li >You can practice problems of various topics according to your rating.</li>
        <li> You can choose the problem of your rating and practice them to improve your competitive programming skills.</li> 
        <li>There are problems for beginners to experienced programmers.</li></ul> </p>
        <button onClick={()=>goToProblems()} class=" inline-flex text-white bg-black border-0 ml-0 mr-8  py-2 px-6 focus:outline-none hover: rounded text-lg">Go To Problem Set</button>
        </div>
        </div>

        <div class="container mx-auto flex px-5 pt-24 pb-8 mt-24 md:flex-row flex-col items-center ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
      <h1 class="py-5 title-font sm:text-4xl text-3xl  font-medium text-gray-900">Contests</h1>         
      <p class="py-10 mb-4 leading-relaxed">
        <ul class="list-disc">
        <li >There are contests of Codeforeces and Leetcode.</li>
        <li>Contests occur in 3-4 days.</li> 
        <li>There are various contests for beginners to experienced programmers.</li></ul> </p>
        <button onClick={()=>goToContests()} class=" inline-flex text-white bg-black border-0 ml-0 mr-8  py-2 px-6 focus:outline-none hover: rounded text-lg">Go To Contests</button>
        </div>
        </div>
        <Footer/>
      
    </div>
    </div>
  );
}

export default Home;
