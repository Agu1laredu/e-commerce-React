import React, {useState} from 'react';
import './Contador.css'

const Contador = () => {
    const [count, setCount] = useState(0);

    return <div className='contador'>
         <h3 className='contadorrrr'>CONTADOR</h3>
       <div className='contadordiv'>
       <p className='valor'>VALOR:{count}</p>
        <button className='botoncount' onClick={() => {setCount(count - 1)}}>{'-'}</button>
        <button className='botoncount' onClick={() => {setCount(0)}}>{'0'}</button>
        <button className='botoncount' onClick={() => {setCount(count + 1)}}>{'+'}</button>
       </div>
    </div>
} 
export default Contador;