import React from 'react';
import noh from '../../../assets/images/noh2.png'
import './index.css';


const AboutMe = () => {
  return (
    <div className="flex-row about-me" id="about-me">
      <div className="flex-column about-me-text">
        <h2>Sobre mim?</h2>
        <p>Sempre fui apaixonada pela arte de maquiar. Já maquiei inúmeras pessoas e me formei em uma das melhores escolas de maquiagem do Brasil.</p>
        <p>Já ajudei centenas de pessoas com dicas de maquiagem nas minhas mídias sociais. Sempre com avaliações positivas. </p>
        <p>Estou em São Paulo, Brasil e você pode agora, se maquiar comigo e ter uma experiência única.</p>
      </div>
      <img src={noh} alt="about-me"/>
    </div>
  )
}

export default AboutMe;
