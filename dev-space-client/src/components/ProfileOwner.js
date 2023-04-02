import React from "react";

const ProfileOwner = ({ email, username }) => {
  const getInitials = (name) => {
    if (!name) {
      return "";
    }
    const parts = name.split(" ");
    let initials = "";
    for (let i = 0; i < parts.length; i++) {
      initials += parts[i][0];
    }
    return initials.toUpperCase();
  }

  const getProfilePicture = () => {
    const initials = getInitials(username);
    return <div className="profile-picture">{initials}</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Profile Owner</h3>
      </div>
      <div className="card-body">
        {getProfilePicture()}
        <p>Name: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default ProfileOwner;