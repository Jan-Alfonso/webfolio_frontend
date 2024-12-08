import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from "../Projects/Projects";

function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
    </>
  );
}

export default Home;
