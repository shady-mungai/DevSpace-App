import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage"


import './App.css';
import Articles from "./components/Articles";
import ArticlesId from "./components/ArticlesId";
import Profile from "./components/Profile";
import Library from "./components/Library";
import ProfileOwner from "./components/ProfileOwner"
import SignOut from "./components/SignOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}/> 
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/Articles" element={<Articles />} /> 
        <Route path="/articles/:id" element={<ArticlesId />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/ProfileOwner" element={<ProfileOwner />} />
        <Route path="/SignOut" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
