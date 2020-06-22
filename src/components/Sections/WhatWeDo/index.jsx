import React from 'react';
import UpperSection from './UpperSection';
import BottomSection from './BottomSection'

import './index.css';


const WhatWeDo = () => {
  return (
    <section className="flex-column section section-what-we-do" id="what-we-do">
      <h2>O que fazemos?</h2>
      <UpperSection />
      <BottomSection />
    </section>
  )
}

export default WhatWeDo;
