import './ItemListcontainer.css';
import Card from 'react-bootstrap/Card';
import Fundadores from './SubComponents/Funders';

import Slider from './SubComponents/Slider';


// import fotouno from '../assets/ceouno.jpg';
// import fotodos from '../assets/ceodos.jpg';
// import fotouno from '../assets/ceotres.jpg';


function ItemListcontainer() {

 

  const funders = {
    nombre: 'Eduardo Aguilar',
    urlimagen: 'https://i.pinimg.com/564x/28/e4/6f/28e46f821f4f7eeca40249704f8cedf8.jpg',
    texto: 'Fundador y Director de ventas '
  }
  const fundersdos = {
    nombre: 'Bellamy Steel',
    urlimagen: 'https://i.pinimg.com/564x/f3/78/4a/f3784adc704a1bc9bcb2e494cd39caee.jpg',
    texto: 'Fundador y Director de Marketing'
  }
  const funderstres = {
    nombre: 'Bella Thomsom',
    urlimagen: 'https://i.pinimg.com/564x/09/be/ac/09beac60c960fdb61f877b1a84a30b77.jpg',
    texto: 'Fundadora y Directora de Producción'
  }

  return (
    <section>
      <Card className="bg-dark text-white">
        <Slider />
        <div className='divtoptex'>
          <Card.ImgOverlay className='textoo'>
            <Card.Title className='texto'>AGUILA DORADA ,CONFIANZA EN TU BRILLO</Card.Title>
            <p className='texto '>
              Aguila Dorada se posiciona en el puesto numero uno en Argentina en distribución de joyas importadas , con más de diez años en el mercado .
              Expandiendonos a más paises de latam, pronto Brasil, Chile , Peru , Bolivia y más.
            </p>
            <Card.Text className='texto'>NUMERO UNO EN EL MERCADO, NUMERO UNO EN DISTRIBUCIÓN ARGENTINA</Card.Text>
          </Card.ImgOverlay>
        </div>
      </Card>
      <section>
       <hr />
      </section>
     
      <div className='fundadores'>
        <hr />
        <Fundadores funders={funders} />
        <Fundadores funders={fundersdos} />
        <Fundadores funders={funderstres} />
        <hr />
      </div>
    </section>
  );
}

export default ItemListcontainer; 