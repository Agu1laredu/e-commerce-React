import { useEffect, useState } from "react";
import './ItemList.css';
import customFech from '../Components/Utils/promesa.jsx';
import ItemDetail from './ItemDetail.jsx';
const { item } = require('../Components/Utils/item.jsx');


const ItemDetalContainer = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        customFech(200, item[4])
           .then(result => setData(result))
           .catch(err => console.log(err))
          
    },[]);
    return (
        <ItemDetail item={data} />
    )
}

export default ItemDetalContainer;