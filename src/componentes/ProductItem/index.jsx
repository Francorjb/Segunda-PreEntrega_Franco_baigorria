import { useParams } from "react-router-dom";
import style from "./item.module.css"

function Item({products}) {
  const { id } = useParams();
  const productos = products.find((productos) => productos.id == id)
  return (
    <div className={style.container}>
      <div>
                <img src={productos.imagen} alt={productos.titulo} />
                <h3>{productos.titulo}</h3>
                <p className={style.descript}>{productos.descripcion}</p>
                <p className={style.precios}>${productos.precio}</p>
      </div>
    </div>
  )
}

export default Item