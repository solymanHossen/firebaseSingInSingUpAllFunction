
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const SingUp = () => {
  const [singUpEmail, setSingUpEmail] = useState("")
  const [singUpPassword, setSingUpPassword] = useState("")
  const [error, setError] = useState("")
  const { createUser } = UserAuth();
  const navigate = useNavigate();




  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
   

    try {
      await createUser(singUpEmail, singUpPassword);      
      navigate('/account')

    } catch (error) {
      setError(e.message)
      console.log(e.message)
    }
  }



  return (

    <div>
      <div className="container">

        <div>
          <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
          <p className='py-2'>
            Already have an account yet?{' '}
            <Link to='/signIn' className='underline'>
              Sign in.
            </Link>
          </p>
        </div>



        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text"

            placeholder='input your email'
            onChange={(event) => {

              setSingUpEmail(event.target.value)

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

              setSingUpPassword(e.target.value)
            }}


          />
          {error}
          <br />
          <button
            style={{
              padding: "10px 20px",
              color: "green",
              border: "none",
              marginTop: "1rem",
              borderRadius: "10px"
            }}
          >Sign Up</button>
        </form>
      </div>
    </div>





  );
};

export default SingUp;