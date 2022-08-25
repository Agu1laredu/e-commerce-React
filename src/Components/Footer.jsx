import React from "react";
import "./Footer.css";
import { GiDiamondsSmile } from "react-icons/gi";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
           <h4>AGUILA DORADA .INC</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>BUENOS AIRES, ARGENTINA</li>
              <li>CALLE P. SHERMAN, WALLAVY 42</li>
              <GiDiamondsSmile className="iconooo"/>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>STAFF VENTAS</h4>
            <ui className="list-unstyled">
              <li>FLORENCIA GILIBERTO</li>
              <li>ISMAEL OTTO</li>
              <li>TOMÁS CAMPOS</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>STAFF DISTRIBUCIÓN</h4>
            <ui className="list-unstyled">
              <li>MAURO LOMBARDO</li>
              <li>MARTIN P. DISALVO</li>
              <li>MAURO ROMÁN MONZÓN</li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4>STAFF MARKETING</h4>
            <ui className="list-unstyled">
              <li>DANIEL RIBBA</li>
              <li>LUCIANO NAHUEL VEGA</li>
              <li>PADUA KEOMA SALAS</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THIS ATMA INC | Derechos reservados|
            Términos de servicio| Privacidad 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;