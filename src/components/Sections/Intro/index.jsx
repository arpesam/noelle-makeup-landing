import React from 'react';
import Button from '../../Button';

import pincel from '../../../assets/images/pincel-sem-bg.png'
import './index.css';


const Intro = () => {
  const handleClick = () => {
    // alert('Oops!! Ainda trabalhando nisso');
    window.open("https://forms.gle/meQw2o93Wx8cditt6");
  }

  return (
    <section className="flex-column intro-section" id="intro" >
      {/* <Navbar /> */}
      <div className="intro-content flex-row">
        <div className="intro-text">
          <p>
            <span id="first-text">Apenda automaquiagem online e quando quiser!</span>
            <span style={{ display: 'block', textDecoration: 'line-through' }}>De R$ 79,00</span>
            <span style={{ display: 'block', color: '#4464cf' }}>Por R$ 59,00</span>            
          </p>
          <Button title="Agendar agora" handleClick={handleClick} />
        </div>
        <img src={pincel} alt="" width="750"/>
      </div>
    </section>
  )
}

export default Intro;