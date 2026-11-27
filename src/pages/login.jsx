import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerschema } from "../component/component formschema/registerschema";

function Login() {
  const navigate = useNavigate();
  const location =useLocation();
   const[logindata,setLogindata]=useState({
    username:"",
    password:""
  })

  function handlechange(e){setLogindata({
    ...logindata,
    [e.target.name]:e.target.value
  })}

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerdata = location.state;
    console.log("login page",logindata)
    if (logindata.username === registerdata.name && logindata.password === registerdata.password){
      console.log("if success")
      navigate("/dashboard")
    } else {
      console.log("Credentialerrror")
  }}

  return ( 
     <>
    
    <form onSubmit={handleSubmit}>
      <input type='text' required placeholder="Enter your username" name="username" onChange={handlechange}/>
      <input type='password' required placeholder="Enter your password" name="password" onChange={handlechange}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Login