import { useEffect, useState } from "react";
import Contador from './ItemCount'
import './ItemList.css';
import desafio from "./Utils/promesa";
import { item } from "./Utils/item";

import Swal from 'sweetalert2'

import Card from "react-bootstrap/Card";

const ItemProductcontainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    desafio(item)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  const onAdd = (qty) => {
    Swal.fire({
      title: qty ,
      text: 'Cantidad seleccionadas',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  };

  return (
    <div className="productos" style={{ display:'flex'}}>
      {products.map((item) => (
         <div className="productoss" style={{ display:'flex'}}>
          <Card id='card' style={{ width: "30rem" , margin: "5%" }}>
            <Card.Img className="imagenproduct" variant="top" src={item.imagen}/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
              {item.price}
              </Card.Text>
              <Contador stock={5} initial={1} onAdd={onAdd}/>
            </Card.Body>
          </Card>
      </div>
      ))}
    </div>
  );
};

export default ItemProductcontainer;
