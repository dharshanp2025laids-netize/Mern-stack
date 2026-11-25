import { useState } from "react";

function App() {
  const[email, setEmail]=useState("")
  const[pass, setPass]=useState("")
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("printing inside the print function")
    console.log(email,pass)
  };
  return ( 
     <>
     
    <div className='text-yellow-500 text-3xl'>Dharshan</div>
    <input type='Email' required placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type='password' required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
    <button type="submit" onclick={()=>print()}>Submit</button>
  
    <form onSubmit={handlesubmit}>
    <input type='Email' required placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type='password' required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
    <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Login