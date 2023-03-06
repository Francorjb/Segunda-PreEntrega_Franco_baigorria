import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="img_logo" src="/asset/logodiet.png" alt="logo dietetica" />
            <div className="links">
            <a href="#">Productos</a>
            <a href="#">About</a>
            <a href="#">Contacto</a>
                <div>
                    <a href="#"><img src="/asset/icono_carrito.png" alt="" /></a>
                    <span>0</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar