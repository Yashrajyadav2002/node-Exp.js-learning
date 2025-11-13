import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to="home">Home</Link> |
            <Link to="insert">Insert</Link> |
            <Link to="display">Display</Link> |
            <Link to="search">Display 2</Link> |
            <Link to="update">Update</Link>
            
            <hr />

            <Outlet />


            <hr />
            www.mycompany.com 2025.
        </>
    )
}


export default Layout;