import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
   const[formdata,setFormdata]=useState({
    username:"",
    password:""
  })

  function handlechange(e){setFormdata({
    ...formdata,
    [e.target.name]:e.target.value
  })}
  const[username, setUsername]=useState("")
  const[password, setPassword]=useState("")
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata)
    Navigate("/dashboard")
    
  };
  return ( 
     <>
    
    <form onSubmit={handlesubmit}>
      <input type='text' required placeholder="Enter your username" name="username" onChange={handlechange}/>
      <input type='password' required placeholder="Enter your password" name="password" onChange={handlechange}/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Login;