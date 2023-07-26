import React, { useState, useEffect } from 'react';
import './contest.css';
import Header from '../components/header.js';
import UserData1 from './UserData1';

const API = 'https://codeforces.com/api/contest.list?gym=false';

const Contests = () => {
  const [upcomingContests, setUpcomingContests] = useState([]);
  const [pastContests, setPastContests] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        const contests = json.result;
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        const upcoming = contests.filter((contest) => contest.relativeTimeSeconds < 0);
        const past = contests.filter((contest) => contest.relativeTimeSeconds > 0);

        setUpcomingContests(upcoming);
        setPastContests(past);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="contest2">
        <h1 className="cont1">UPCOMING CONTESTS</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ContestsId</th>
                <th>Name</th>
                <th>Type</th>
                <th>Duration(Hrs)</th>
                <th>Enter</th>
              </tr>
            </thead>
            <tbody>
            <UserData1 users={upcomingContests} isUpcomingContests={true} />

            </tbody>
          </table>
        </div>
      </div>
      <div className="contest1">
        <h1 className="cont2">PAST CONTESTS</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ContestsId</th>
                <th>Name</th>
                <th>Type</th>
                <th>Duration(Hrs)</th>
                <th>Enter</th>
              </tr>
            </thead>
            <tbody>
              <UserData1 users={pastContests} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contests;
