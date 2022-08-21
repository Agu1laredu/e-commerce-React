import './itemListcontainer.css'
import Card from 'react-bootstrap/Card';
import Fotodos from '../assets/imagenuno.jpg'

function Lading() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={Fotodos} alt="Card image" className='imagen' />
      <div>
      <Card.ImgOverlay>
        <Card.Title className='texto'>DREW ARGENTINA,TU TIENDA FAVORITA</Card.Title>
        <Card.Text className='texto'>
         TIENDA NOOB se posiciona en el puesto numero uno en Argentina en distribución de la marca Drew House , Con tan solo dos años en el mercado . 
         Expandiendonos a más paises de latam, pronto Brasil, Chile , Peru , Bolivia y más.
        </Card.Text>
        <Card.Text className='texto'>NUMERO UNO EN EL MERCADO, NUMERO UNO EN DISTRIBUCIÓN ARGENTINA</Card.Text>
      </Card.ImgOverlay>
      </div>
    </Card>
  );
}

export default Lading;
