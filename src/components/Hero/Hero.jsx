import React from 'react'
import "../Hero/Hero.css"
import folioHero from "../images/folio_hero.png";

function Hero() {
  return (
    <main>
        <img className='folio-hero' src={folioHero} alt="folio-hero" />
    </main>
  )
}

export default Hero
