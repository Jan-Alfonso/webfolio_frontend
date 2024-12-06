import React from 'react'
import "../Hero/Hero.css"
import folioHero from "../images/folio_hero.png";

function Hero() {
  return (
    <div className='hero-image'>
        <img className='folio-hero' src={folioHero} alt="folio-hero" />
    </div>
  )
}

export default Hero
