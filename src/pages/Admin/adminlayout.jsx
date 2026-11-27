import { Link, Outlet } from "react-router-dom";

function Admin() {
    return(
        <div>
            <h1>Admin pages</h1>
            <nav>
                <Link to={"/admin/dashboard"}>Dashboard</Link>
                <Link to={"/admin/userdetails"}>user details</Link>
                <Link to={"/admin/setting"}>setting</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Admin