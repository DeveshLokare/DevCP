import './Home.js';
import Header from '../components/header.js';
import React, { useEffect, useState } from 'react';
import List from '../components/todolist.js';
import axios from "axios"
// import Fetch from '../components/fetchApi.js';


function ProblemSet(props){
    const [problems, setProblems] = useState([]);

    const auth = async()=>{
      console.log("start")
      const token = await localStorage.getItem('token')
      console.log(token)
      if(!token){
        window.location.href = '/'
        alert("Access denied!")
      }
    }

    useEffect(() => {
      const fetchProblems = async () => {
        try {
          const response = await axios.get('http://localhost:5000/problem');
          setProblems(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchProblems();
    }, []);
  

    
  return (
    <div>
      {auth()}
        <Header/>
      <h1 className='text-center'>Practice Problems</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.contestId + problem.index}>
          <a href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`} target="_blank" rel="noopener noreferrer">
            {problem.name}
          </a>
          {problem.rating}
        </li>
        ))}
      </ul>
    </div>
    
      
  );

        
    
}
       

export default ProblemSet;
