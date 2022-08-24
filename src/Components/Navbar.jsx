import  './navbar.css';
import Icon from './cardWidget';

function Navbar() {
  return (
      <div className="Menu">
          
         <h1>TIENDA NOOB</h1>
         <Icon/>
       <nav>
       
        <div className='buttonnav'>
            <li className='li'>INICIO</li>
        </div>
        <div className='buttonnav'>
            <li className='li'>PRODUCTOS</li>
        </div>
        <div className='buttonnav'>
            <li className='li'>CONTACTO</li>
        </div>
       </nav>
       <hr/>
    </div>
  );
}

export default Navbar;
