import React from 'react';
import './Home.css';
import About from '../About/About';
import Projects from "../Projects/Projects";

function Home() {
  return (
    <>
      <About/>
      <div className="divider"></div>
      <Projects/>
    </>
  );
}

export default Home;
