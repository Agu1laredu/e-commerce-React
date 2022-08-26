import './ItemListcontainer.css';
import Card from 'react-bootstrap/Card';
import Fundadores from './SubComponents/Funders';
import Contador from './Contador'
import Slider from './SubComponents/Slider';


function ItemListcontainer() {

  const funders = {
    nombre: 'Eduardo Aguilar',
    urlimagen: 'https://via.placeholder.com/64',
    texto: 'Fundador y Director de ventas '
  }
  const fundersdos = {
    nombre: 'Bellamy Steel',
    urlimagen: 'https://via.placeholder.com/64',
    texto: 'Fundador y Director de Marketing'
  }
  const funderstres = {
    nombre: 'Bella Thomsom',
    urlimagen: 'https://via.placeholder.com/64',
    texto: 'Fundadora y Directora de Producción'
  }

  return (
    <section>
      <Card className="bg-dark text-white">
        <Slider />
        <div className='divtoptex'>
          <Card.ImgOverlay className='textoo'>
            <Card.Title className='texto'>AGUILA DORADA ,CONFIANZA EN TU BRILLO</Card.Title>
            <Card.Text className='texto textoo'>
              Aguila Dorada se posiciona en el puesto numero uno en Argentina en distribución de joyas importadas , con más de diez años en el mercado .
              Expandiendonos a más paises de latam, pronto Brasil, Chile , Peru , Bolivia y más.
            </Card.Text>
            <Card.Text className='texto'>NUMERO UNO EN EL MERCADO, NUMERO UNO EN DISTRIBUCIÓN ARGENTINA</Card.Text>
          </Card.ImgOverlay>
        </div>
      </Card>
      <section>
        <Contador/>
      </section>
      <div className='fundadores'>
        <Fundadores funders={funders} />
        <Fundadores funders={fundersdos} />
        <Fundadores funders={funderstres} />
      </div>
    </section>
  );
}

export default ItemListcontainer; 