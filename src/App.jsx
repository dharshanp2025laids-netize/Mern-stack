
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/login'
import Project from './pages/project'
import Tasks from './pages/tasks'
import Team from "./pages/team";
import Setting from "./pages/setting";
import Dashboard from "./pages/dashboard";
import Calendar from "./pages/calendar";
import Client from "./pages/clients";

function App() {
 
  return (
     <>
    <BrowserRouter>
    <Routes>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/project" element = {<Project/>}/>
    <Route path = "/tasks" element= {<Tasks/>}/>
    <Route path = "/team" element= {<Team/>}/>
    <Route path = "/setting" element= {<Setting/>}/>
    <Route path = "/calendar" element= {<Calendar/>}/>
    <Route path = "/client" element= {<Client/>}/>
    <Route path = "/dashboard" element= {<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
