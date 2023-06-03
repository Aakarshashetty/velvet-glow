import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(localStorage?.user);
  const [userAddress, setUserAddress] = useState(localStorage?.userAddress);
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
      const { foundUser, encodedToken } = await response.json();
      localStorage.setItem("encodedToken", encodedToken);
      localStorage.setItem("user", JSON.stringify({ user: foundUser }));
      localStorage.setItem(
        "userAddress",
        JSON.stringify({ userAddress: foundUser.address })
      );
      setUserData(foundUser);
    } catch (e) {}
  };
  const addUserData = async ({ firstName, lastName, email, password }) => {
    try {
      const userData = {
        email,
        firstName,
      };

      const response = await fetch("/api/auth/signup", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(userData),
      });
      const { encodedToken, createdUser } = await response.json();
      localStorage.setItem("encodedToken", encodedToken);
      localStorage.setItem("user", JSON.stringify({ user: createdUser }));
      setUserData(createdUser);
    } catch (e) {}
  };
  return (
    <AuthContext.Provider
      value={{
        getLoginData,
        isLoggedIn,
        setIsLoggedIn,
        addUserData,
        userData,
        setUserData,
        userAddress,
        setUserAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
