import React from 'react';
import chating from '../../../assets/images/chating.svg';
import './index.css';


const OurServices = () => {
  return (
    <section className="flex-row section our-services-section" id="our-services">
      <div className="our-services-text">
        <h2>Nossos serviços</h2>
        <p>
          Nossa plataforma fornece conectividade de forma segura para as Fintechs e empresas aos serviços e produtos das instituições financeiras. Com a adoção do Openbanking os principais dados dos clientes e serviços financeiros podem ser consumidos diversas empresas, com isso em mente nossos principais serviços agregam valor para essas <span> 3 camadas: clientes, empresas e Instituições financeiras.</span>
        </p>
      </div>
      <img src={chating} alt="chatting" height="300" />
    </section>
  )
}

export default OurServices;
