import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const response = await fetch('http://localhost:3000/logout', {
      method: 'DELETE'
    });
    if (response.ok) {
      // handle signing out the user (e.g., by clearing the authentication context)
      navigate("/login");
    } else {
      // handle error
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Sign Out</h3>
      </div>
      <div className="card-body">
        <p>Are you sure you want to sign out?</p>
        <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default SignOut;