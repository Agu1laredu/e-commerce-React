import './itemListcontainer.css'
import Card from 'react-bootstrap/Card';
import Fotodos from '../assets/imagenuno.jpg'

function Lading() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={Fotodos} alt="Card image" className='imagen' />
      <div>
      <Card.ImgOverlay>
        <Card.Title className='texto'>TU TRANSPORTE FAVORITO</Card.Title>
        <Card.Text className='texto'>
          Con más de siete años en el mercado, logramos ser numero uno en satisfacer a nuestros clientes con nuestras entregas en tiempo y forma. 
          nominados a los perimos LoftTopicEmpresariales este 2022 en la categoria de distribuciones internacionales de productos primarios 
        </Card.Text>
        <Card.Text className='texto'>NUMERO UNO EN EL MERCADO</Card.Text>
      </Card.ImgOverlay>
      </div>
    </Card>
  );
}

export default Lading;
