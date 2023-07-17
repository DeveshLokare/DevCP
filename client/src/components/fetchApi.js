import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/problem');
        setProblems(response.data);
      } catch (error) {
        console.error('Error occurred while fetching problems', error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div>
      <h1>Codeforces Practice Problems</h1>
      {problems.map((problem) => (
        <div key={problem.contestId + problem.index}>
          <h2>{problem.name}</h2>
          <a href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`} target="_blank" rel="noopener noreferrer">
            View Problem
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
