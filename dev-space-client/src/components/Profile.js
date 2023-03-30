import React from "react";
import ProfileOwner from "./ProfileOwner";
import Library from "./Library";
import SignOut from "./SignOut";

const Profile = () => {
  return (
    <>
      <ProfileOwner />
      <Library />
      <SignOut />
    </>
  );
}

export default Profile;