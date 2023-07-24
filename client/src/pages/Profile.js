import React from 'react'
import Header from '../components/header.js';



const API = "https://codeforces.com/api/user.info?handles={user.handle}";

const Profile = () => {
  return (
    <div>
      <Header/>
      <h1>USERNAME:</h1>
      <h2>USERRATING:</h2>
      <div>
        
      </div>
    </div>
  )
}

export default Profile