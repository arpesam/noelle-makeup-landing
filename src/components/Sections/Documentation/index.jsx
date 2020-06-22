import React from 'react';
import mobilePhone from '../../../assets/images/mobile-phone.svg';
import Button from '../../Button';
import './index.css';


const Documentation = () => {

  const handleClick = () => {
    alert('Oops!! Ainda trabalhando nisso');
  }

  return (
    <section className="flex-row documentation-section" id="documentation">
      <div className="flex-column documentation-text">
        <h2>Documentação</h2>
        <p>
          Acesse de forma prática e rápida a documentação com exemplo das nossas principais APIs disponíveis para consumo, através do nosso Portal do desenvolvedor possuímos a disponibilidade um ambiente de desenvolvimento com exemplos e documentação detalhada de como consumir cada um dos serviços disponíveis em nossa plataforma integrada as instituições financeiras, faça testes e mais testes em nosso sandbox.
        <br />
        <br />
          Navegue para o nosso portal de API e fornece acesso ao seu time de desenvolvimento.
        </p>
        <Button title="Saiba mais" width="30%" handleClick={handleClick} />
      </div>
      <div className="documentation-image-container" >
        <img src={mobilePhone} alt="mobile-phone" height="500" />
      </div>
    </section>
  )
}

export default Documentation;
