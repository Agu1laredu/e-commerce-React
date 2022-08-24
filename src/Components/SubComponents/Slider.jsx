import Sliderr from './Componentes.Sliders/Sliderr';
import Uno from '../../assets/joyatres.jpg';
import Dos from '../../assets/joyados.jpg';
import Tres from '../../assets/joyitas.jpg';
import Cuatro from '../../assets/joyascuatro.jpg';
import Cinco from '../../assets/joyascinco.jpg';
import Seis from '../../assets/joyauno.jpg';

function SliderFoto () {

  const mockImagenes = [Uno, Dos, Tres, Cuatro, Cinco, Seis];

  return <Sliderr imagenes={mockImagenes} />


}

export default SliderFoto;