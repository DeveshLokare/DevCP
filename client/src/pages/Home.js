import React from 'react';
import './Home.css';

import Header from '../components/header';
import Footer from '../components/footer';
import {useNavigate } from 'react-router-dom';
import axios from 'axios'




function Home() {
  const navigate= useNavigate();
  const goToContests=() =>{
    navigate('/contests')
  }
  const goToProblems=() =>{
    navigate('/problem')
  }

  const name = async(event) =>{
    event.preventDefault();
    const token = await localStorage.getItem('token')
    try{
await axios.post("http://localhost:5000/home",
{
  token
}).then(async(response)=>{
   const name = await response.name
   console.log(name)
   return name ;
})
    }catch(error){
  console.log(error)
    }

  }

  
  const auth = ()=>{ 
    const token = localStorage.getItem('token')
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
<h1>Hello {name}</h1>
  
        <Footer/>
      
    </div>
    </div>
  );
}

export default Home;
