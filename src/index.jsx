import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import ItemListcontainer from './Components/ItemListcontainer'

import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <div className='containerGrid'>
   <App />
    {/* <ItemListcontainer/> */}
    <Footer/>
   </div>
  </BrowserRouter>
);

