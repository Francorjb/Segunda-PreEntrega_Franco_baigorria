import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CArtWidget/index";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <img className="img_logo" src="/asset/logodiet.png" alt="logo dietetica" />
			</Link>
            <div className="links">
                <Link to="/home">
                    <p>Home</p>
                </Link>
                <Link to="/productos">
                    <p>Productos</p>
                </Link>
                <Link to="/contacto">
                    <p>Contacto</p>
                </Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar