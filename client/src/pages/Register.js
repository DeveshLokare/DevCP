import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [username, setUsername ] = useState('')
    const [email, setEmail ] = useState('')
    const [handle, setHandle ] = useState('')
    const [password1, setPassword1 ] = useState('')
    const [password2, setPassword2 ] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true);

    const Navigate = useNavigate()

    const handleChange = (event) => {
        const { value } = event.target;
        setPassword1(value);
    
        // Check if the password is at least 8 characters long
        setIsValidPassword(value.length >= 8);
      };

    const handleRegister= async(event) =>{
         event.preventDefault();
         if (isValidPassword) {
        if(password1===password2){
            const password = password1
          try {
            await axios.post("http://localhost:5000/register",{
                email,
                username,
                handle,
                password
            })
            .then(async(response) => {
                const statusCode = response.status;
                const msg = await  response.data.message;
                console.log('Status code:', statusCode);
            if(msg === false){
                window.location.href = '/register'
                alert("This email is already registered")
            }
            else{
                if(response.status===200)
                {
                  Navigate('/login')
                }
                else{
                    alert("Problem in registering.Please try again")
                }
                
            }
            
        })
        } catch (error) {} 
    }
    else{
        alert("Passwords do not match.Please re-enter")
    }
    
}
else{
    alert("invalid password")
}
    }

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
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    
                        <h3 className="text-4xl font-bold text-purple-600">
            Register
                        </h3>
                    
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleRegister}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name 
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    id="name"
                                    value={username}
                                    onChange ={(event)=>setUsername(event.target.value)}
                                    className="block w-full mt-1 border-black-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange ={(event)=>setEmail(event.target.value)}
                                    className="block w-full mt-1 border-black-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required 
                                    
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Codeforces Handle
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="handle"
                                    id="handle"
                                    value={handle}
                                    onChange ={(event)=>setHandle(event.target.value)}
                                    className="block w-full mt-1 border-black-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                     
                                    
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    id="password1"
                                    value={password1}
                                    onChange ={handleChange}
                                    className="block w-full mt-1 border-black-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    id="password2"
                                    value={password2}
                                    onChange ={(event)=>setPassword2(event.target.value)}
                                    className="block w-full mt-1 border-black-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                                disabled={!isValidPassword}
                            >
                                Register
                            </button>
                        </div>
                            {!isValidPassword && <p className="text-red-500">Password must be at least 8 characters long.</p>}
                    </form>
                    <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="/login"
                            >
                                Already registered?
                            </a>
                </div>
            </div>
        </div>
    );
}
