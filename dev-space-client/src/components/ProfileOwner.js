import React from "react";
import './ProfileOwner.css'
let userEmail = localStorage.getItem('email')
let userName = localStorage.getItem('username')
const ProfileOwner = () => {


  return (
    <>
    <div className="profileri">
      <div className="email">{userEmail}</div>
      <div className="password">{userName}</div>
    </div>
    </>
  )
}

export default ProfileOwner;