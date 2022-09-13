import { useEffect, useState } from "react";
import './ItemDetail.css';
import {  useParams} from "react-router-dom";
import customFech from '../Components/Utils/segundapromesa.jsx';
import ItemDetail from './ItemDetail.jsx';
const { item } = require('../Components/Utils/item.jsx');


const ItemDetalContainer = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        customFech( item.find( item => item.id == id))
           .then(result => setData(result))
           .catch(err => console.log(err))
          
    },[id]);
    return (
        <ItemDetail item={data} />
    )
}

export default ItemDetalContainer;