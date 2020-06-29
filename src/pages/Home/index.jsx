import React from 'react';
import IntroSection from '../../components/Sections/Intro';
import HowItWorks from '../../components/Sections/HowItWorks';
import Navbar from '../../components/Navbar';
import AboutMe from '../../components/Sections/AboutMe';
// import UseCases from '../../components/Sections/UseCases';
// import Documentation from '../../components/Sections/Documentation';
// import NewsLetter from '../../components/Sections/NewsLetter';
// import ContactUs from '../../components/Sections/ContactUs';
import Footer from '../../components/Footer';
import './index.css';


const Home = () => {
  return (
    <div>
      <div className="content">
        <Navbar />
        <IntroSection />
        <HowItWorks />
        <AboutMe />
        {/* <OurServices />
        <UseCases />
        <Documentation />
        <NewsLetter />
        <ContactUs /> */}
        <Footer />
      </div>
    </div>
  )
}

export default Home;
