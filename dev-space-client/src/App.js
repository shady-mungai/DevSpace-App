import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage"


import './App.css';
// import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}/> 
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        {/* <Route path="/Articles" element={<Articles />} /> */}
      </Routes>
    </div>
  );
}

export default App;
