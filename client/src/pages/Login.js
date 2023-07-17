import React, { useState } from 'react';
import axios from 'axios';



export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleLogin = async(event) =>{
          event.preventDefault();
        try {
          await axios.post("http://localhost:5000/login",{
                email,
                password
            }).then((response)=>{

                const token = response.data.token;
                console.log(response)
        
                localStorage.setItem('token', token);
        
                console.log('Login successful');
              
                window.location.href = '/home'
            })

            

          } catch (error) {
            alert("Login unsuccessful.Please check your credentials");
            console.error('Login failed:',error.message);
          } 
    };
    
    const auth = ()=>{
        const token = localStorage.getItem('token')
        if(token)
        {
          window.location.href = '/home'
          }
      }
   

    return (
        <div>
            {auth()}
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-2">
                        <label
                            for="email"
                          
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="email"
                            id="email"
                            value={email}
                            onChange ={(event)=>setEmail(event.target.value)}
                            required
                         />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                            >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="password"
                            id="password"
                            value={password}
                            onChange ={(event)=>setPassword(event.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/register"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
        </div>
    );
}
