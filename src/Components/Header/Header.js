import { Link, Outlet } from "react-router-dom"
import logo from '../../Assets/imagens/logo.jpeg'
import './Header.css'

function Header() {
    return (
        <>
            <header class="header">
                <div class="logo">
                    <Link to={"/"}><img src={logo} alt="Logo Physicare" /></Link>
                </div>
                <nav class="nav">
                    <a href="https://play.google.com/store/apps?hl=pt_BR&gl=US" class="nav-link" target="_blank">Baixar App</a>
                    <Link to={"/cadastro"} className="nav-link">Cadastre-se</Link>
                    <Link to={"login"} className="nav-link">Login</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header