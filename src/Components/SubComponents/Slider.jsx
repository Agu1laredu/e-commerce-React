import Sliderr from './Componentes.Sliders/Sliderr';
import Uno from '../../assets/imagenuno.jpg';
import Dos from '../../assets/conjuntonegro.jpg';
import Tres from '../../assets/conjuntogris.jpg';

function SliderFoto () {

  const mockImagenes = [Uno, Dos, Tres];

  return <Sliderr imagenes={mockImagenes} />


}

export default SliderFoto;