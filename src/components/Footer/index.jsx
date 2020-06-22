import React from 'react';
import logo from '../../assets/images/logo.svg'
import './index.css';


const Footer = () => {
  return (
    <div className="flex-row section footer">
      <div className="flex-column footer-logo-container">
        <img src={logo} alt="logo-footer" height="23" style={{ marginBottom: '5px' }} />
        <div>Noelle Makeup - Todos os direitos reservados </div>
      </div>
    </div>
  )
}

export default Footer;
