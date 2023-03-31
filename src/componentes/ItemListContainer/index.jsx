import { Link } from "react-router-dom";
import style from"./card.module.css";

const Card = ({products}) => {
    return (
        <Link to={`${products.id}`}>
            <div className={style.container}>
                <img src={products.imagen} alt={products.titulo} />
                <h3>{products.titulo}</h3>
                <p>{products.descripcion}</p>
                <p>$ {products.precio}</p>
            </div>
        </Link>
    )
}

export default Card;