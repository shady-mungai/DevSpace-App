import React, { useContext } from "react";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext/AuthContext";
const ProfileOwner = () => {
const{currentUser,setCurrentUser} = useContext(AuthContext)
// const [articles,setArticles] = useState([])
  useEffect(() => {
  fetch('http://localhost:3300/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let user = data.filter(
      (user)=> user.email=== currentUser && currentUser.email
    )
    setCurrentUser(user);

  })
  }, []);
  
  // const getInitials = (name) => {
  //   if (!name) {
  //     return "";
  //   }
  //   const parts = name.split(" ");
  //   let initials = "";
  //   for (let i = 0; i < parts.length; i++) {
  //     initials += parts[i][0];
  //   }
  //   return initials.toUpperCase();
  // }

  // const getProfilePicture = () => {
  //   const initials = getInitials(username);
  //   return <div className="profile-picture">{initials}</div>;
  // }

  return (
    <div className="hero">
        <div>
               
               <>
                 <div className="div"><p>{currentUser && currentUser.username}</p></div>
               <div className="div"><p>{currentUser && currentUser.email}</p></div>
               </>
     
           </div>
    </div>
  );
}

export default ProfileOwner;