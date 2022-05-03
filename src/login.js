import React from 'react' 
import { Outlet, Link } from "react-router-dom";


const Login = () => {
  const afterLogin = () =>{
    
    console.log("Click")
  }
  return (  <div>
         <h1>Welcome to Bus Care Plus</h1>
         <h3> Please enter credentials to proceed</h3>
         <input type={"email"} placeholder="Email Address"></input>
        
         <input type={'password'} placeholder="Password"></input>
         <Link to="/home"><button onClick={afterLogin}>Log In</button></Link>
         <Outlet></Outlet>
         </div>);
};

export default Login;