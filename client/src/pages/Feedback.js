import React from 'react';
import Header from '../components/header.js';
import axios from "axios"
import './Home.js';
import { useState } from 'react';



function Feedback() {
  const [message,setMessage] = useState('')

  const auth = ()=>{
    
    const token = localStorage.getItem('token')
    
    if(!token){
      window.location.href = '/'
      alert("Access denied!")
    }
  }
 

  const handleFeedback = async(event)=>{
   event.preventDefault();
   try{
   const token = localStorage.getItem('token');
   
    await axios.post("http://localhost:5000/feedback",{
      token, 
    message
  }).then((response) =>{
  const status = response.status
  if(response.status===200){
   window.location.href = '/feedback';
    alert("Feedback sent successfully!")
  }
    else{
      alert("Error")
    }
  })


   }catch(error){}
  }
  
    return (
      <div>
        {auth()}
      <Header/>
      <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Feedback</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please share your experience with us</p>
        </div>
        
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                value={message}
                onChange ={(event)=>setMessage(event.target.value)}
                required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" onClick={handleFeedback}>Send</button>
            </div>
            
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"> 
              <p>
              We highly value your response<span>&#128522;</span>
              </p>
            </div>
          </div>
        </div>
            
      </div>
    </section>
    </div>
        
      
)
};


export default Feedback;