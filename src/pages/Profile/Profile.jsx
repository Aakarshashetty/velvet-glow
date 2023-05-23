import React, { useState } from "react";
import "./profile.css";
import UserProfile from "./UserProfile";
import UserAddress from "./UserAddress";
const Profile = () => {
  
  
  const [navHeader, setNavHeader] = useState("profile");
  return (
    <div className="profile">
      <h3>Account</h3>

      <nav className="profile-nav">
        <span onClick={() => setNavHeader("profile")}>Profile</span>
        <span onClick={() => setNavHeader("address")}>Address</span>
      </nav>
      {navHeader === "profile" ? <UserProfile /> : <UserAddress />}

      
    </div>
  );
};

export default Profile;
