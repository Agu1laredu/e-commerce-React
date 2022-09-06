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
            <div className="productoss" style={{ display: 'flex' }}>
                <Card id='card' style={{ width: "30rem", margin: "5%" }}>
                    <Card.Img className="imagenproduct" variant="top" src={item.imagen} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.price}
                        </Card.Text>
                        <Card.Text>
                            {item.detalle}
                        </Card.Text>
                        <Contador stock={5} initial={1} onAdd={onAdd} />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ItemDetail;
