import { useEffect, useState } from "react";
import './ItemDetail.css';
import customFech from '../Components/Utils/segundapromesa.jsx';
import ItemDetail from './ItemDetail.jsx';
const { item } = require('../Components/Utils/item.jsx');


const ItemDetalContainer = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        customFech(500, item[4])
           .then(result => setData(result))
           .catch(err => console.log(err))
          
    },[]);
    console.log('data',data)
    return (
        <ItemDetail item={data} />
    )
}

export default ItemDetalContainer;