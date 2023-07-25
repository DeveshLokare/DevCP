import React, { useEffect, useState } from "react";
import Header from '../components/header.js';
import UserData from './UserData.js';
import "./problem.css";

const API = "https://codeforces.com/api/problemset.problems?tags=implementation";

const ProblemSet = () => {
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers(json.result.problems.map((problem) => ({ ...problem, isSelected: false })));
      });
  }, []);

  const handleFavoriteClick = (ind) => {
    const updatedUsers = [...users];
    updatedUsers[ind].isSelected = !updatedUsers[ind].isSelected;
    setUsers(updatedUsers);

    if (updatedUsers[ind].isSelected) {
      setFavorites([...favorites, updatedUsers[ind]]);
    } else {
      const updatedFavorites = favorites.filter((favorite) => favorite.contestId + favorite.index !== updatedUsers[ind].contestId + updatedUsers[ind].index);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="hi">PROBLEMS:</h1>
            <UserData users={users} handleClick={handleFavoriteClick} />
      </div>
    </div>
  );
};

export default ProblemSet;
