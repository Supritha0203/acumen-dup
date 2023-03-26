import { Footer, Navbar, Navbar_Prim } from '../components';
import { About5, Explore5, Feedback, GetStarted5, Hero5 } from '../sections';
import React from 'react'

const TechnicalEvents = () => {
  return (
  <div className="bg-primary-black overflow-hidden color6">
    <Navbar_Prim />
    <div className="gradient-02 z-0" />
    <Hero5 />
    <div className="relative">
      <About5 />
      <div className="gradient-03 z-0" />
      <Explore5 />
      <div className="gradient-04 z-0" />
      <GetStarted5 />
    </div>
    {/* <div className="relative">
      <Feedback />
      <div className="gradient-04 z-0" />
    </div> */}
    <Footer />
  </div>
);
}

export default TechnicalEvents