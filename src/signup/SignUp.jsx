import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

import "./signup.css";

const SignUp = () => {
  const { addUserData } = useAuth();
  const [passwordType, setPasswordType] = useState(false);
  const navigate = useNavigate();
  const [newUserData, setNewUserData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const signupHandler = () => {
    if (
      newUserData.email !== "" &&
      newUserData.password !== "" &&
      newUserData.firstName !== "" &&
      newUserData.lastName !== ""
    ) {
      addUserData(newUserData);
      navigate("/products");
    } else {
      alert("Enter proper details");
    }
  };
  return (
    <div className="signup">
      <h2>Sign up</h2>
      <label>
        First Email:
        <input
          placeholder="Enter your email"
          onChange={(e) =>
            setNewUserData({ ...newUserData, email: e.target.value })
          }
        />
      </label>
      <label>
        First name:
        <input
          placeholder="Enter your first name"
          onChange={(e) =>
            setNewUserData({ ...newUserData, firstName: e.target.value })
          }
        />
      </label>
      <label>
        Last name:
        <input
          placeholder="Enter your Last name"
          onChange={(e) =>
            setNewUserData({ ...newUserData, lastName: e.target.value })
          }
        />
      </label>
      <label>
        Password:
        <input
          type={passwordType ? "text" : "password"}
          onChange={(e) =>
            setNewUserData({ ...newUserData, password: e.target.value })
          }
        />
        <button onClick={() => setPasswordType((prev) => !prev)}>
          {passwordType ? "hide" : "show"}
        </button>
      </label>
      <label>
        Confirm password:
        <input type={passwordType ? "text" : "password"} />
      </label>
      <button onClick={signupHandler}>Create New Account</button>
      <span>
        Already have an account? <NavLink to="/login">sign in</NavLink>
      </span>
    </div>
  );
};

export default SignUp;
