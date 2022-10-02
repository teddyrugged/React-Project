import React from 'react';
import './Navbar.css';
import group from './images/Group 77.svg';

const HeroSection = () => {
  return (
    <section className='hero'>
        <img src={group} alt="groupd of pics" className='hero-photo'/>
        <h1 className='hero--h1'>Online Experiences</h1>
        <p className='hero--p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </section>
  )
}

export default HeroSection