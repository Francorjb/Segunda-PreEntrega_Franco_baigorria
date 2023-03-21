import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './componentes/ItemListContainer';
import  Navbar  from "./componentes/NavBar";
// import ProductsList from "./componentes/ProductsList";

function App() {
  const [products, setProducts] = useState ([])

  useEffect(() => {
  fetch('https://api.storerestapi.com/products')
	.then(response => response.json())
	.then(json => setProducts(json))
  }, [])

  return (
    <div>
      <Navbar/>
      <ItemListContainer text="Pagina de prueba"/>
      <Routes>
        <Route path="/home" element={<p>hola bienvenido a mi dietetica</p>} />
        <Route path='/productos' element={ <p>l</p> }/>
        <Route path='/about' />
        <Route path='contacto' />
      </Routes>
    </div>
  )
}

export default App
