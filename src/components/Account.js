import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
const {user,logout}=UserAuth();

const navigate=useNavigate();

const handleLogout=async()=>{
  try {
    await logout();
    navigate('/')
    console.log("you are log out");
    
  } catch (error) {
    console.log(error.message);
  }
}



  return (
    <div>
      <h1>Account</h1>
      <p>Email :{user && user.email}</p>

       <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;