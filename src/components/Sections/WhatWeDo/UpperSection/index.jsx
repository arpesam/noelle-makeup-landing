import React from 'react';
import GirlHandlingPC from '../../../../assets/images/girl-handling-pc.svg';

import './index.css';


const UpperSection = () => {
  return (
    <div className="flex-row upper-section">
      <img src={GirlHandlingPC} alt="girl-handling-pc" />
      <div className="upper-section-text">
        <p>
          Facilitamos a conexão entre empresas e as principais instituições financeiras do nosso país. Nosso principal objetivo é trazer ao mercado um único ponto de conexão seguro para que de forma simples os produtos financeiros possam ser consumidos e embutidos ao consumo dos serviços digitais.
        </p>
        <p>
          Entre os nossos principais serviços em nossa plataforma, agregamos valor para os seguintes pontos:
        </p>
      </div>
    </div>
  )
}

export default UpperSection;
