import React from 'react';
import './index.css';


const Footer = () => {
  return (
    <div className="flex-row section footer" id="footer">
      <div className="flex-column footer-logo-container">
        <p>Noelle Makeup - Todos os direitos reservados </p>
      </div>
      <div className="footer-contact">
        <p>Contato</p>
        <p><i class="fab fa-whatsapp" size="4x"></i> 11 941411913</p>
        <p>
          <a href="https://www.instagram.com/noellesampaio.makeup/" target="_blank">
            <i class="fab fa-instagram" size="4x"> </i> @noellesampaio.makeup
          </a>
        </p>
        <p>
          <i class="far fa-envelope"></i> cursos.noelle.makeup@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Footer;
