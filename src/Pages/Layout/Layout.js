import { Link, Outlet } from "react-router-dom"
import './Layout.css'

function Layout() {
    return (
        <>
            <ul className="link-layout">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/cadastro"}>Cadastro</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>

            <Outlet />
        </>
    )
}

export default Layout