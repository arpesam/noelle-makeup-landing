import React from 'react';
import Navbar from '../../Navbar';
import Button from '../../Button';
import './index.css';


const Intro = () => {
  const handleClick = () => {
    // alert('Oops!! Ainda trabalhando nisso');
    window.open("https://forms.gle/meQw2o93Wx8cditt6");

  }

  return (
    <section className="flex-column intro-section" id="intro" >
      <Navbar />
      <div className="intro-content flex-row">
        <div className="intro-text">
          <p>
            <span>Aprenda automaquiagem </span>
             a se auto maquiar onlinse 100% onlisne, compre agora!
          </p>
          <Button title="Agendar agora" handleClick={handleClick} />
        </div>
      </div>
    </section>
  )
}

export default Intro;