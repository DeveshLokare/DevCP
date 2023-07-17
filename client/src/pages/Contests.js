import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import axios from 'axios';

const ContestList = () => {
    const [contests, setContests] = useState({ upcoming: [], past: [] });
  

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contests');
        setContests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContests();
  }, []);

  return (
    <div>
        <Header/>
      <h1 className='text-center'>Upcoming Contests</h1>
      <ul>
        {contests.upcoming.map((contest) => (
          <li key={contest.link}>
            <a href={contest.link} target="_blank" rel="noopener noreferrer">
              {contest.name}
            </a>
          </li>
        ))}
      </ul>
      <h1 className='text-center'>Past Contests</h1>
      <ul>
        {contests.past.map((contest) => (
          <li key={contest.link}>
            <a href={contest.link} target="_blank" rel="noopener noreferrer">
              {contest.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContestList;
