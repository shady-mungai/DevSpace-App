import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="profile" onClick={toggleDropdown}>
        <p>Profile</p>
        <i className="fa fa-caret-down"></i>
      </div>
      {showDropdown && (
        <div className="dropdown">
          <Link to="/ProfileOwner">Profile</Link>
          <Link to="/Library">Library</Link>
          <Link to="/SignOut">LogOut</Link>
        </div>
      )}
    </>
  );
};

export default Profile;