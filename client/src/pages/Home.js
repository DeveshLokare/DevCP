import React from 'react';
import './Home.css';

import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'




function Home() {
  const navigate = useNavigate();
  const goToContests = () => {
    navigate('/contests')
  }
  const goToProblems = () => {
    navigate('/problem')
  }

  const name = async (event) => {
    event.preventDefault();
    const token = await localStorage.getItem('token')
    try {
      await axios.post("http://localhost:5000/home",
        {
          token
        }).then(async (response) => {
          const name = await response.name
          console.log(name)
          return name;
        })
    } catch (error) {
      console.log(error)
    }

  }


  const auth = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/'
      alert("Access denied!")
    }
  }

  return (
    <div>
      {auth()}
      <div className="Home">
        <Header />
        <h1 className="sm:text-5xl py-10 text-center">Hello {name}</h1>
        <p className='py-6 text-3xl text-center'>Welcome to the Competative Programming Portal.</p>
        <span className="flex justify-center items-center w-full lg:px-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-20 px-6 md:px-8 ">

            
              <span className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-3xl hover:shadow-black/30 wow animate__animated animate__fadeInUp">
                <div className="h-96 w-full">
                  <img className="h-full w-full object-cover" src="./image/CP1.jpg" alt="img" />
                </div>

                <div className="w-full absolute inset-0 ">


                  <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] md:translate-y-[66%] group-hover:translate-y-0 transition-transform ease-in duration-700 group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75">
                    <div className="bg-[#1B2A2C] bg-opacity-75 w-full group-hover:bg-opacity-0 py-7 pb-9">
                      <h1 className="font-dmserif text-3xl font-bold text-white group-hover:mb-4 ">Go To Problems</h1>
                    </div>
                    <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[19vh] md:h-[13vh] lg:h-[16vh]">Here you have access of the problems from codeforces. You can save your favourite problems here.</p>

                    <button onClick={()=>goToProblems()} class=" inline-flex text-white bg-black border-0 ml-0 mr-8  py-2 px-6 text-3xl focus:outline-none hover: rounded text-lg">Go To Problem Set</button>

                  </div>
                </div>
              </span>
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-3xl hover:shadow-black/30 wow animate__animated animate__fadeInUp">
                <div className="h-96 w-full">
                  <img className="h-full w-full object-cover" src="./image/CP2.jpg" alt="img" />
                </div>

                <div className="w-full absolute inset-0 ">


                  <div className="w-full absolute inset-0 flex flex-col items-center justify-center text-center translate-y-[64%] md:translate-y-[66%] group-hover:translate-y-0 transition-transform ease-in duration-700 group-hover:bg-[#1B2A2C] group-hover:bg-opacity-75">
                    <div className="bg-[#1B2A2C] bg-opacity-75 w-full group-hover:bg-opacity-0 py-7 pb-9">
                      <h1 className="font-dmserif text-3xl font-bold text-white group-hover:mb-4 ">Go To Contets</h1>
                    </div>
                    <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[19vh] md:h-[13vh] lg:h-[16vh]">Here you will be notified about upcoming contests. You also have the access to pasts contests.</p>

                    <button onClick={()=>goToContests()} class=" inline-flex text-white bg-black border-0 ml-0 mr-8  py-2 px-6 text-3xl focus:outline-none hover: rounded text-lg">Go To Contests</button>

                  </div>
                </div>
              </div>
          </div>
        </span>


            
              
        <Footer />

      </div>
    </div>
  );
}

export default Home;
