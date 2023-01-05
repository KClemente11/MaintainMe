import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


export default function Login(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [login, setLogin] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  const configuration ={
    method: "post",
    url: "url of the login endpoint",
    data: {
      email,
      password,
    }
  }
  
  axios(configuration)
  .then((result) => {setLogin(true);})
  .catch((error) => {error = new Error();})

  // prevent the form from refreshing the whole page
  e.preventDefault();
  // make a popup alert showing the "submitted" text
  alert("Submited");
  }

  let navigate = useNavigate()
  const navigateToRegister = () =>{
    navigate("/")
  }
  return (
    <>
    <h1>Welcome to MaintainMe!</h1>
    <h2>Login</h2>
    <form
        onSubmit={(e) => handleSubmit(e)}
        >
      <label>Enter an email</label>
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        />
    </form><form>
        <label>Enter a password</label>
        <input
        type='password'
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

      {login ? (
          <p className="text-success">You have logged in successfully</p>
        ) : (
          <p className="text-danger">You are not logged in.</p>
        )}

      </form>
      <button className='loginBtn'
      title='Register'
      type='submit'
      onClick={(e) => handleSubmit(e)}>Login</button>
            
            <h3>Already have an account?</h3>
      <button className='loginBtn'
      onClick={navigateToRegister}>Register</button>
      </>
  )
}