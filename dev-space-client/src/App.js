import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage"


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route exact path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
