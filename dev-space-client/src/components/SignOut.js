import React from "react";
import { useNavigate } from "react-router-dom";
import './SignOut.css'


const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const response = await fetch('https://dev-space-server-fodl.onrender.com/logout', {
      method: 'DELETE'
    });
    if (response.ok) {
      navigate("/login");
    } else {
      console.error(response);
    }
  }

  return (
    <div className="signout-page">
      <div className="signout">
      <div className="signout-header">
        <h3>LogOut</h3>
      </div>
      <div className="signout-body">
        <p>Are you sure you want to log out?</p>
        <button className="signout-btn" onClick={handleSignOut}>Log Out</button>
      </div>
      </div>
    </div>
  );
}

export default SignOut;