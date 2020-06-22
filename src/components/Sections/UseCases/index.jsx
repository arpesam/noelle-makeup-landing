import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Card from './Card';

import { cardsData } from './cards-data';
import './index.css';


const UseCases = () => {
  return (
    <section className="use-cases-section" id="use-cases">
      <h2>Casos de uso</h2>
      <Carousel
        id="carousel"
        clickToChange
        slidesPerPage={2}
        // autoPlay={3000}
        // animationSpeed={1000}
        centered
        infinite
      >
        {cardsData.map((item, index) => <Card key={index} {...item} />)}
      </Carousel>
      {/* TODO - make-it better */}
      <div id="responsive-cards">
        {cardsData.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </section>
  )
}

export default UseCases;
