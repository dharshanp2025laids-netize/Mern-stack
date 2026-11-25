import { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./assets/pages/login";
import Project from "./assets/pages/project";
import TaskS from "./assets/pages/tasks";

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
    <Browserrouter>
    <Routes>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/project" element = {<Project/>}/>
    <Route path = "/ tasks" element ={<TaskS/>}/>
    </Routes>
    </Browserrouter>
    </>
  )
}

export default App;
