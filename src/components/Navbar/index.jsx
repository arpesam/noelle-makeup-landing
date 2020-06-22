import React from 'react';
import logo from '../../assets/images/logo8.png';
// import bars from '../../assets/images/icons8-menu.svg';
import './index.css';


const Navbar = () => {
  function handleClose() {
    const el = document.getElementById("responsive-menu-items");
    el.style.display = 'none';
  }
  function handleOpen() {
    const el = document.getElementById("responsive-menu-items");
    el.style.display = 'flex';
  }

  return (
    <div className="navbar-container flex-row" id="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="NoelleMakeup" width="250" />
      </div>
      <div className="navbar-menu-items" id="responsive-menu-items">
        <div id="close-button" onClick={handleClose}><span>X</span></div>
        <a href="#how-it-works">Como funciona?</a>
        {/* <a href="#our-services">Sobre mim</a>
        <a href="#use-cases">Avaliações</a>
        <a href="#documentation">O curso</a>
        <a href="#contact-us">Contato</a>
        <a href="#contact-us" id="btn-schedule">Agendar</a> */}
      </div>
      {/* <div className="icon" onClick={handleOpen}>
        <img src={bars} alt="menu-bars" width="35" />
      </div> */}
    </div>
  )
}

export default Navbar;
