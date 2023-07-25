import React, { useState } from "react";
import "./UserData.css";

const UserData = ({ users }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFavorites, setShowFavorites] = useState(false);
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

  // Calculate the index of the first and last row for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);

  // Filter favorite rows
  const favoriteRows = users.filter((user, index) => selectedRows.includes(index));

  // Change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderRows = showFavorites ? favoriteRows : currentRows;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Favourite</th>
          </tr>
        </thead>
        <tbody>
          {renderRows.map((curUser, ind) => {
            const { contestId, index, name, rating } = curUser;
            const userIndex = showFavorites ? selectedRows[ind] : indexOfFirstRow + ind;
            const isSelected = selectedRows.includes(userIndex);

            return (
              <tr
                style={{ backgroundColor: isSelected ? "yellow" : "white" }}
                key={contestId + index}
                onClick={() => handleClick(userIndex)}
              >
                <td>{contestId + index}</td>
                <td>
                  <a
                    href={`https://codeforces.com/problemset/problem/${contestId}/${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </td>
                <td>{rating}</td>
                <td>
                  <div className="space">
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

      {users.length > rowsPerPage && (
        <div className="pagination-container">
          <ul className="pagination">
            {Array.from({ length: Math.ceil(users.length / rowsPerPage) }).map((_, index) => (
              <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                <button onClick={() => paginate(index + 1)}>{index + 1}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="toggle-favorites">
        <button onClick={handleShowFavorites}>
          {showFavorites ? "Show All Problems" : "Show Favorite Problems"}
        </button>
      </div>
    </>
  );
};

export default UserData;
