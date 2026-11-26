import { useState } from "react";
import { useLocation } from "react-router-dom"

function Dashboard(){
    const location = uselocation();
    const [userdata, setUserdata] = useState();
    function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }
    return(
        <>
        <button onClick={displaydata}>button</button>
        </>
    );
    
}
export default Dashboard