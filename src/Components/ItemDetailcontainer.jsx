import { useEffect, useState } from "react";
import './ItemList.css';
import customFech from '../Components/Utils/promesa.jsx';
import ItemDetail from './ItemDetail.jsx';
const { item } = require('../Components/Utils/item.jsx');


const ItemDetalContainer = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        customFech(500, item)
           .then(result => setData(result))
           .catch(err => console.log(err))
          
    },[]);
    console.log('data',data)
    return (
        <ItemDetail item={data} />
    )
}

export default ItemDetalContainer;