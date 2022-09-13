import Contador from './ItemCount'
import Swal from 'sweetalert2'
import Card from "react-bootstrap/Card";


const ItemDetail = ({ item }) => {

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
        <div className="detailContainer" >
            <div className="divDetail" >
                
                <Card className='card' >
                    <div className='divImg'>
                        <Card.Img className="imgDetail" src={item.imagen} />
                    </div>
                    <div className='cardbody'>
                        <Card.Body>
                         <div className='textoCuerpo'>
                         <Card.Title className='itemName'>{item.name}</Card.Title>
                            <Card.Text className='itemPrices'>
                                {item.price}
                            </Card.Text>
                            <Card.Text>
                                {item.detalle}
                            </Card.Text>
                         </div>
                            <div>
                                <Contador stock={5} initial={1} onAdd={onAdd} />
                            </div>
                        </Card.Body>
                          
                    </div>
                </Card>
                <hr/>

            </div>

        </div>

    );
};

export default ItemDetail;
