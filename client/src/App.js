import Home from './pages/Dashboard';
import ProblemSet from './pages/ProblemSet';
import Register from './pages/Register';
import Login from './pages/Login';
import Contests from './pages/Contests';
import Feedback from './pages/Feedback';
import Home1 from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';



function App() {
    return( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home1/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/problem" element={<ProblemSet/>}></Route>
            <Route path="/contests" element={<Contests/>}></Route>
            <Route path="/feedback" element={<Feedback/>}></Route>
            <Route path = "/profile" element = {<Profile/>}></Route>
            <Route path="/*" element={<PageNotFound/>}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
