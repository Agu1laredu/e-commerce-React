import React, {useState,useEffect} from 'react';
import './ItemCount.css'

const Contador = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

   useEffect(() => {
       setCount(initial);
   }, [initial]);

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
       <div  className='valores'>
       <p className='valor'>CANTIDAD:{count}</p>
       {
          stock ? <button className='addcart' onClick={() => onAdd(count)}>ADD</button> : <button disabled>ADD</button> 
        }
       </div>
      <div className='botones'>
      <button className='botoncount' onClick={decrement}>{'-'}</button>
        {/* <button className='botoncount' onClick={() => {setCount(0)}}>{'0'}</button> boton de reset solo porque pude hacerlo */}
        <button className='botoncount' onClick={increment}>{'+'}</button>
      </div>
       </div>
      
    </div>
} 
export default Contador;