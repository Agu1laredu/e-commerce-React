import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import Lading from './Components/ItemListcontainer';
import ItemDetail from './Components/ItemDetailcontainer';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Lading /> */}
    <ItemDetail/>
    <Footer/>
  </React.StrictMode>
);


