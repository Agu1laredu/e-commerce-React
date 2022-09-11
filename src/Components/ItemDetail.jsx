import Contador from './ItemCount'
import Swal from 'sweetalert2'
import Card from "react-bootstrap/Card";


const ItemDetail = ({item}) => {

    const onAdd = (qty) => {
        Swal.fire({
            title: qty,
            text: 'Cantidad seleccionadas',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    };

    return (
        <div className="productos" style={{ display: 'flex' }}>
            <hr />
            <div className="productoss" >
            <Card id='card' >
                <div>
                    <Card.Img className="imagenproduct"  src={item.imagen} />
                </div>
                   <div className='cardbody'>
                   <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.price}
                        </Card.Text>
                        <Card.Text>
                            {item.detalle}
                        </Card.Text>
                    </Card.Body>
                   </div>
                   
                </Card>
            </div>
            <Contador stock={5} initial={1} onAdd={onAdd} />
            <hr />
        </div>
       
    );
};

export default ItemDetail;
