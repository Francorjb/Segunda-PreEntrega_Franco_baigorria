import Card from "../ItemListContainer/index";
import style from"./productos.module.css";

function Productos({products}) {
    return (
        <div className={style.container}>
            {
            products.map((productos)=>(
                <Card key={productos.id} products={productos}/>
            ))
        }
        </div>
    )
}

export default Productos;