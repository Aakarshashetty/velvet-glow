import React from "react";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router";
import "./profile.css";
import UserAddress from "./UserAddress";
import { toast } from "react-hot-toast";

const UserProfile = () => {
  const { isLoggedIn, setIsLoggedIn, userData } = useAuth();
  const navigate = useNavigate();
  const logOutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    toast.success("Logged out successfully")
    navigate("/logout");
  };
  const { firstName, lastName } = userData;
  return (
    <div className="user-profile">
      <h3>Profile Details</h3>
      <p>
        <b>First Name: </b>
        {firstName}
      </p>
      <p>
        <b>Last Name: </b>
        {lastName}
      </p>
      <button onClick={logOutHandler} className="logout">
        log out
      </button>
      <UserAddress/>
    </div>
  );
};

export default UserProfile;
