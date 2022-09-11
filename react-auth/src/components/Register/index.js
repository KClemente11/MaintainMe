import React, { useState } from 'react'
import './index.scss'
import axios from "axios"


export default function Register(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [register, setRegister] = useState("")

  const handleSubmit = (e) => {
    const configuration ={
      method: "post",
      url: "",
      data: {
        email,
        password,
      }
    }
    
    axios(configuration)
    .then((result) => {console.log(result);})
    .catch((error) => {console.log(error);})

    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Submited");
    }
  return (
    <><form
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
      </form>
      <button className='registerBtn'
      title='Register'
      type='submit'
      onClick={(e) => handleSubmit(e)}
      />
      </>
  )
}
// const Register = () => {
//   return(
//     <h1>IS THIS WORKING?</h1>
//   )
// }

// export default Register
