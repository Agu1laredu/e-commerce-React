import React ,{ Fragment } from 'react';
import './Funders.css'

const Fundadores = ({funders}) => {
    return (
        <Fragment>
            <div className='media'>
            <img src={funders.urlimagen} alt='' className='mr-3' />
            <div className='media-body'>
                <h3 className='mt-0'>{funders.nombre}</h3>
            </div>
            <h5>{funders.texto}</h5>

            </div>
        </Fragment>
    );
}

export default Fundadores;