import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
   const[formdata,setFormdata]=useState({
    username:"",
    password:""
  })

  function handlechange(e){setFormdata({
    ...formdata,
    [e.target.name]:e.target.value
  })}

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("login page",formdata)
    alert("login sucessfull")
    navigate("/dashboard",{state:formdata})
    
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