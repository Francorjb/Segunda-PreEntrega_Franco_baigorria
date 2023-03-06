import "./navbar.css";

import CartWidget from "../CArtWidget/index";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="img_logo" src="/asset/logodiet.png" alt="logo dietetica" />
            <div className="links">
                <a href="#">Productos</a>
                <a href="#">About</a>
                <a href="#">Contacto</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar