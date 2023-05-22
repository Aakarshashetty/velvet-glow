import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import './login.css'

export const Login = () => {
  const { getLoginData, setIsLoggedIn, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const guestCreds = {
    email: "aakarshashetty@gmail.com",
    password: "aakarshashetty",
  };
  const loginHandler = () => {
    if (userData.email !== "" && userData.password !== "") {
      setIsLoggedIn(!isLoggedIn);
      getLoginData(userData.email, userData.password);
      navigate(location?.state?.from?.pathname);
    } else {
      alert("Enter valid credentials");
    }
  };
  const loginAsGuestHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    getLoginData(guestCreds.email, guestCreds.password);
    navigate("/products");
  };
  const handleCredentials = (e) => {
    if (e.target.type === "email" && e.target.value !== "") {
      setUserData({ ...userData, email: e.target.value });
    }
    if (e.target.type === "password" && e.target.value !== "") {
      setUserData({ ...userData, password: e.target.value });
    }
  };
  return (
    <div className="login">
      <input
        placeholder="Enter email"
        type="email"
        onChange={(e) => handleCredentials(e)}
      />
      <input
        placeholder="Enter password"
        type="password"
        onChange={(e) => handleCredentials(e)}
      />
      <button onClick={loginHandler}>{isLoggedIn ? "Logout" : "Login"}</button>
      <button onClick={loginAsGuestHandler}>Login As a Guest</button>
      <span>
        Don't have an account? <NavLink to="/signup">Sign up</NavLink>
      </span>
    </div>
  );
};
