import React, { useState, useEffect } from "react";
import "./UserData.css";

const UserData = ({ users }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFavorites, setShowFavorites] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(3600);
  const rowsPerPage = 90;

  const handleClick = (ind) => {
    let updatedSelectedRows = [...selectedRows];

    if (updatedSelectedRows.includes(ind)) {
      updatedSelectedRows = updatedSelectedRows.filter((row) => row !== ind);
    } else {
      updatedSelectedRows.push(ind);
    }

    setSelectedRows(updatedSelectedRows);
  };

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  // Filter users whose rating falls within the desired range
  const filteredUsers = users.filter((user) => {
    const { rating } = user;
    return rating >= minRating && rating <= maxRating;
  });

  const pageCount = Math.ceil(filteredUsers.length / rowsPerPage);
  const pages = Array.from({ length: pageCount }).map((_, index) => index + 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [minRating, maxRating, showFavorites]);

  const renderRows = showFavorites ? filteredUsers.filter((_, index) => selectedRows.includes(index)) : filteredUsers;

  return (
    <>
      <div className="toggle-favorites">
        <button className="text-2xl bg-blue-700" onClick={handleShowFavorites}>
          {showFavorites ? "Show All Problems" : "Show Favorite Problems"}
        </button>
      </div>
      <div className="text-center py-12">
        <label>Min Rating:</label>
        <input className="border-2 border-black px-2 py-2 mx-2 rounded-lg"
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(parseInt(e.target.value))}
        />
        <label>Max Rating:</label>
        <input className="border-2 border-black px-2 py-2 mx-2 rounded-lg"
          type="number"
          value={maxRating}
          onChange={(e) => setMaxRating(parseInt(e.target.value))}
        />
      </div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="px-10 py-2 border-solid border-gray-300 font-bold bg-violet-700
              text-white">ID</th>
            <th className="px-10 py-2 border-solid border-gray-300 font-bold bg-violet-700
              text-white">Name</th>
            <th className="px-10 py-2 border-solid border-gray-300 font-bold bg-violet-700
              text-white">Rating</th>
            <th className="px-10 py-2 border-solid border-gray-300 font-bold bg-violet-700
              text-white">Favourite</th>
          </tr>
        </thead>
        <tbody>
          {renderRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((curUser, ind) => {
            const { contestId, index, name, rating } = curUser;
            const userIndex = filteredUsers.findIndex((user) => user === curUser);
            const isSelected = selectedRows.includes(userIndex);

            return (
              <tr
                style={{ backgroundColor: isSelected ? "yellow" : "white" }}
                key={contestId + index}
              >
                <td className="px-10 py-2 border-solid border-gray-300">{contestId + index}</td>
                <td className="px-10 py-2 border-solid border-gray-300">
                  <a
                    href={`https://codeforces.com/problemset/problem/${contestId}/${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </td>
                <td className="px-10 py-2 border-solid border-gray-300">{rating}</td>
                <td className="px-10 py-2 border-solid border-gray-300">
                  <div className="text-center">
                    <button onClick={() => handleClick(userIndex)}>
                      <i className="fa-solid fa-square-check"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {pageCount > 1 && (
        <div className="flex justify-center items-center mt-20">
          <ul className="pagination">
            {pages.map((page) => (
              <li key={page} className={currentPage === page ? "active" : ""}>
                <button onClick={() => setCurrentPage(page)}>{page}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UserData;
