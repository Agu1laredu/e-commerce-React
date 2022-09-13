import './App.css';
// import Menu from './Components/Navbar.jsx';
import { Routes, Route, Link } from "react-router-dom";
import Icon from './Components/cardWidget';
import Lading from './Components/ItemListcontainer.jsx';
import Product from './Components/ItemList';
import Contact from './Components/ItemContactcontainer.jsx';
import Detail from './Components/ItemDetailcontainer.jsx';



function App() {
  return (
    <div className="App">
      
      <header className="App-header">

      <div className="Menu">
          
          <h1>JOYERÍA  DORADA</h1>
        <nav>
        <Icon className='iconomenu'/>
         <div className='buttonnav'>
             <li className='li'>  <Link className='link' to="/">INICIO</Link></li>
         </div>
         <div className='buttonnav'>
             <li className='li'><Link className='link' to="Product">PRODUCTOS</Link></li>
         </div>
         <div className='buttonnav'>
         <li className='li'><Link  className='link' to="Contact">CONTACTO</Link></li>
         </div>
        </nav>
     </div>
      </header>
      <Routes>
        <Route path="/" element={<Lading />} />
        <Route path="Product" element={<Product />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/category/:id" element={<Product />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
