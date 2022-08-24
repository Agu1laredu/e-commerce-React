import  './navbar.css';
import Icon from './CardWidget';

function Navbar() {
  return (
      <div className="Menu">
          
         <h1>TIENDA NOOB</h1>
         <Icon/>
       <nav>
       
        <div className='buttonnav'>
            <li>INICIO</li>
        </div>
        <div className='buttonnav'>
            <li>PRODUCTOS</li>
        </div>
        <div className='buttonnav'>
            <li>CONTACTO</li>
        </div>
       </nav>
       <hr/>
    </div>
  );
}

export default Navbar;
