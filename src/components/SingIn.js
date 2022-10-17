
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const SingIn = () => {


  const [singInEmail, setSingInEmail] = useState("")
  const [singInPassword, setSingInPassword] = useState("")
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(singInEmail, singInPassword)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };



  return (
    <div>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text"

            placeholder='input your email'
            onChange={(event) => {
              setSingInEmail(event.target.value)

            }}


            style={{
              marginTop: "2rem",
              marginBottom: "1rem"
            }} />

          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='input your password'
            onChange={(e) => {
              setSingInPassword(e.target.value)
            }}

          />
          <br />
          <button
            style={{
              padding: "10px 20px",
              color: "green",
              border: "none",
              marginTop: "1rem",
              borderRadius: "10px"
            }}

          >Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SingIn;