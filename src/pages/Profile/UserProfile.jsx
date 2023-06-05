import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router";
import "./profile.css";
import { toast } from "react-hot-toast";
import {CgProfile} from 'react-icons/cg'

const UserProfile = () => {
  const { isLoggedIn, setIsLoggedIn, userData } = useAuth();
  const navigate = useNavigate();
  const logOutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    toast.success("Logged out successfully")
    navigate("/");
  };
  const { firstName, lastName } = userData;
  return (
    <div className="user-profile">
      <h3><CgProfile/> Profile Details</h3>
      
      <p>
        <b>First Name: </b>
        {firstName}
      </p>
      <p>
        <b>Last Name: </b>
        {lastName}
      </p>
      <button onClick={logOutHandler} className="logout">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
