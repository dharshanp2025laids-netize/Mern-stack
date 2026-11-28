import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

function Dashboard(){
    const location = useLocation();
    const [userdata, setUserdata] = useState("");
    const [count, setCount] = useState(0);
    //function displaydata(){
    //setUserdata(location)
    // console.log(userdata)
    //}
    useEffect(()=>{
       setUserdata(location.state);
       console.log(userdata);
    })
    return(
        <div>
        <button onClick={()=> setCount(count+1)}>click</button>
        </div>
    ); 
}
export default Dashboard;