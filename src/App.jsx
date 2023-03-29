import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './componentes/ItemListContainer';
import  Navbar  from "./componentes/NavBar";
import  Productos  from "./componentes/ProductsList";


function App() {
  const [products, setProducts] = useState ([]);

  useEffect(() => {
    fetch("./productosDiet.json")
      .then((response) => response.json())
      .then((json) => setProducts(json))
  }, []);

  return (
    <div>
        <Navbar/>
        <ItemListContainer text="Pagina de prueba"/>
        <Routes>
          <Route path="/home" element={<p>hola bienvenido a mi dietetica</p>} />
          <Route path='/productos' element={< Productos products={products} />}/>
          <Route path='/contacto' />
        </Routes>
    </div>
  );
}

export default App;
