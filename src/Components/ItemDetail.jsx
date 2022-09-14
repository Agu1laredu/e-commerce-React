import Contador from './ItemCount'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import Card from "react-bootstrap/Card";


const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        Swal.fire({
            title: qty,
            text: 'Cantidad seleccionadas',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        setItemCount(qty);
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
                            <div>{
                                itemCount === 0 
                                ? <Contador stock={5} initial={1} onAdd={onAdd} />
                                : <Link to='/' styles={{textDecoration: "none"}}><Button className='checkout'>CHECKOUT</Button></Link>

                                }
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
