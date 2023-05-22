import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth-context";

const Profile = () => {
  const navigate = useNavigate();
  const {isLoggedIn, setIsLoggedIn} = useAuth();
  const logOutHandler = () => {
    setIsLoggedIn(!isLoggedIn)
    navigate("/logout")
  }
  return (
    <div>
      Profile
      <button onClick={logOutHandler}>log out</button>
    </div>
  );
};

export default Profile;
