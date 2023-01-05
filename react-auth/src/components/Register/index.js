import React, { useState } from 'react'
import './index.scss'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


export default function Register(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [register, setRegister] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration ={
      method: "post",
      url: "url of the registration endpoint",
      data: {
        email,
        password,
      }
    }
    
    axios(configuration)
    .then((result) => {setRegister(true);})
    .catch((error) => {error = new Error();})

    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Submited");
    }


    let navigate = useNavigate()
    const navigateToLogin = () =>{
      navigate("/login")
    }

  return (
    <>
    <h1>Welcome to MaintainMe!</h1>
    <h2>Register</h2>
    <form id='email-form'
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

      {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}

      </form>
      <button className='registerBtn'
      title='Register'
      type='submit'
      onClick={(e) => handleSubmit(e)}>Register</button>
      
      <h3>Already have an account?</h3>
      <button className='loginBtn'
      onClick={navigateToLogin}>Login</button>
      
      </>
  )
}
// const Register = () => {
//   return(
//     <h1>IS THIS WORKING?</h1>
//   )
// }

// export default Register
