import React from "react";
let userId = localStorage.getItem('id')
let userEmail = localStorage.getItem('email')
let userName = localStorage.getItem('username')
const ProfileOwner = () => {


  return (
    <>
    <div>{userId}</div>
    <div>{userEmail}</div>
    <div>{userName}</div>
    </>
  )
}

export default ProfileOwner;