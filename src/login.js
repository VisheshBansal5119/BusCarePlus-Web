import React from 'react'
import NavBar from './NavBar'

 const login = () =>{


    const afterLogin = () =>{
return(
    <NavBar></NavBar>
)
    }
  return (
      <div>
    <h1>Welcome to Bus Care Plus</h1>
    <h3> Please enter credentials to proceed</h3>

    <input type={'email'}>Email Address</input>
    
    <input type={'password'}>Password</input>
    <button onClick={afterLogin}>Log In</button>
    </div>
  )
};

export default login
