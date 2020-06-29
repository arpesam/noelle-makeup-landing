import React from 'react';
import Button from '../../Button';
import rosa from '../../../assets/images/model-orange.jpg'
import './index.css';


const HowItWorks = () => {
  const handleClick = () => {
    window.open("https://forms.gle/meQw2o93Wx8cditt6");

  }
  return (
    <section className="flex-row how-it-works-section" id="how-it-works" >
      <div className="flex-column hiw-left-section">
        <h2>Como funciona o curso?</h2>
        <p>O curso é feito de forma totalmente online e ao vivo.</p>
        <p>No dia e horário agendados por você, nós nos conectaremos por vídeo chamada utilizando
          <ul>
            <li>Zoom</li>
            <li>Skype</li>
            <li>Google Meet</li>
          </ul>
        </p>
        <p>Você aprenderá como prepapar bem a pele e escolher produtos de acordo com  o seu rosto  e gosto. </p>
        <p>Descobrirá quais produtos e tons ideais para você, seu contraste e subtom.</p>
        <p>O curso tem duração de 2h30, podendo variar de acordo com a necessidade.</p>
        <p>Além disso, vai ter dicas de produtos, pinceis e técnicas de aplicação. Isso inclui desde aplicar contorno e iluminação até técnicas de esfumado e delineado. O olho você poderá escolher com antecedencia qual deseja aprender. </p>
        <Button title="Agendar agora" handleClick={handleClick} />
      </div>
      <img src={rosa} alt="rosa" width="800" className="flex-row" style={{ justifyContent: 'flex-end'}}/>
    </section>
  )
}

export default HowItWorks;