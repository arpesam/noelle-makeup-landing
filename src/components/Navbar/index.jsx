import React from 'react';
import logo from '../../assets/images/logo9.png';
import './index.css';


const Navbar = () => {
  const handleClick = () => {
    window.open("https://forms.gle/meQw2o93Wx8cditt6");
  }

  return (
    <div className="navbar-container flex-row" id="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="NoelleMakeup" width="250" />
      </div>
      <div className="navbar-menu-items" id="responsive-menu-items">
        <a href="#how-it-works">Como funciona?</a>
        <a href="#about-me">Sobre mim</a>
        {/* <a href="#use-cases">Avaliações</a> */}
        {/* <a href="#documentation">O curso</a> */}
        <a href="#footer">Contato</a>
        <a href="#contact-us" id="btn-schedule" onClick={handleClick}>Agendar</a>
      </div>
    </div>
  )
}

export default Navbar;
