import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer';
import Navbar from "./componentes/navBar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <ItemListContainer text="Estos son los productos"/>
    </div>
  )
}

export default App
