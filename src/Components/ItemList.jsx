import { useEffect, useState } from "react";
import { Link , useParams} from "react-router-dom";
import './ItemList.css';
import desafio from "./Utils/promesa";
import { item } from "./Utils/item";

import Swal from 'sweetalert2'

import Card from "react-bootstrap/Card";

const ItemProductcontainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
   if(id) {
    desafio(item.filter(item => item.categoryId == id))
    .then((result) => setProducts(result))
    .catch((err) => console.log(err));
   } else {
    desafio(item)
    .then((result) => setProducts(result))
    .catch((err) => console.log(err));
   }
  }, []);


  return (
    <div className="contenedorr">


      <nav>
        <div className='buttonnavv'>
          <li className='li'>  <Link className='link' to="/category/1">INGLES</Link></li>
        </div>
        <div className='buttonnavv'>
          <li className='li'><Link className='link' to="/category/2">ALEMAN</Link></li>
        </div>
        <div className='buttonnavv'>
          <li className='li'><Link className='link' to="/category/3">ESPAÑOL</Link></li>
        </div>
      </nav>



      <div className="productos" >
        {products.map((item) => (
          <div className="productoss" >
            <Card id='card' style={{ width: "100%" }}>
              <Card.Img className="imagenproducts" variant="top" src={item.imagen} />
            </Card>
                  <div className='buttonnavv'>
                    <li className='lii'><Link className='link' to="/Detail">DETALLE</Link></li>
                  </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ItemProductcontainer;
