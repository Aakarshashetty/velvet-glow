import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getLoginData = async (userEmail, userPassword) => {
    try {
      const creds = {
        email: userEmail,
        password: userPassword,
      };
      const response = await fetch("/api/auth/login", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(creds),
      });
      const { encodedToken } = await response.json();
      localStorage.setItem("encodedToken", encodedToken);
    } catch (e) {}
  };
  const addUserData = async ({ firstName, lastName, email, password }) => {
    try {
      const userData = {
        email,
        firstName,
        lastName,
        password,
      };

      const response = await fetch("/api/auth/signup", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(userData),
      });
      const {encodedToken} = await response.json();
      localStorage.setItem("encodedToken",encodedToken)
    } catch (e) {}
  };
  return (
    <AuthContext.Provider value={{ getLoginData, isLoggedIn, setIsLoggedIn,addUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
