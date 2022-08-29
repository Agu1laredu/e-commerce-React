import React, {useState,useEffect} from 'react';
import Icon from './cardWidget';
import './ItemCount.css'

const Contador = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

   useEffect(() => {
       setCount(initial);
   }, [setCount]);

    const increment = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    }
    const decrement = () => {
      if (count > initial) {
        setCount(count - 1);
      }
    }

    return <div className='contador'>
       <div className='contadordiv'>
       <p className='valor'>VALOR:{count}</p>
        <button className='botoncount' onClick={decrement}>{'-'}</button>
        {/* <button className='botoncount' onClick={() => {setCount(0)}}>{'0'}</button> boton de reset solo porque pude hacerlo */}
        <button className='botoncount' onClick={increment}>{'+'}</button>
        {
          stock ? <button className='addcart' onClick={() => onAdd(count)}><Icon className='iconito'/></button> : <button disabled><Icon className='iconito'/></button> 
        }
       </div>
    </div>
} 
export default Contador;