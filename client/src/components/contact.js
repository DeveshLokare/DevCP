import {React, useState, useEffect} from 'react';
import axios from 'axios'


function Contact (){
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [message ,setMessage] = useState('');

    const handleContact =async (event)=>{
        event.preventDefault();
   try{
   
    await axios.post("http://localhost:5000/",{
    name,
    email, 
    message
  }).then((response) =>{
  if(response.status===200){
   window.location.href = '/';
    alert("Message sent successfully!")
  }
    else{
      alert("Error")
    }

  })
}catch(error){}

    }
return(
<section className="text-gray-600 body-font relative bg-gradient-to-r from-blue-300 to-transparent">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to ask us any queries!</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             value={name}
             onChange ={(event)=>setName(event.target.value)}
             required/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
             value={email}
             onChange ={(event)=>setEmail(event.target.value)}
             required/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            value ={message} 
            onChange ={(event)=>setMessage(event.target.value)}
            required>
            </textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit' onClick={handleContact}>Submit</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500"><span>&#128231;
</span>example@gmail.com</a>
          <p className="leading-normal my-2 relative ">
            <span>
            <svg class="absolute h-8 w-8 text-blue-500 left-72"  fill="none" viewBox="0 0 28 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg>
</span>
IIT INDORE
</p>
          
        </div>
      </div>
    </div>
  </div>
</section>
)
}

export default Contact;