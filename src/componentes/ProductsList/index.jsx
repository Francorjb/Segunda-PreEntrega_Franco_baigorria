function Productos({products}) {
  return (
      <div>
          {
              products.map((productos)=>(
                  <h3>{productos.title}</h3>
              ))
          }
      </div>
  )
}

export default Productos