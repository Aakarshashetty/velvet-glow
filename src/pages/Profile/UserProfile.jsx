import React from 'react'
import { useAuth } from '../../contexts/auth-context'
import { useNavigate } from 'react-router';

const UserProfile = () => {
  const { isLoggedIn, setIsLoggedIn,userData } = useAuth();
  const navigate = useNavigate();
  const logOutHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate("/logout");
  };
  const {firstName,lastName} = userData
  return (
    <div className='user-profile'>
        <h3>Profile Details</h3>
        <p><b>First Name: </b>{firstName}</p>
        <p><b>Last Name: </b>{lastName}</p>
        <button onClick={logOutHandler} className="logout">
        log out
      </button>
    </div>
  )
}

export default UserProfile