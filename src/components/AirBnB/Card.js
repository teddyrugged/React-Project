import React from 'react';
import './Navbar.css';
import man from './images/image 12.svg';
import star from './images/Star 1.svg';
import wedding from './images/wedding-photography 1.svg';
import bike from './images/mountain-bike 1.svg';

const Card = () => {
  return (
    <div className='card--grid'>
        <div className='card--one'>
            <img src={ man } alt = "a pic" className="card--man" />
            <div>
                <img src={ star} alt = "a pic" className="card--star" />
                <span>5.0 </span>
                <span>(6).</span>
                <span>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
        <div className='card--two'>
            <img src={ wedding } alt = "a pic" className="card-wedding" />
            <div>
                <img src={ star} alt = "a pic" className="card--star" />
                <span>5.0 </span>
                <span>(30).</span>
                <span>USA</span>
            </div>
            <p>Learn wedding photography</p>
            <p>From $125 / person</p>
        </div>
        <div className='card--three'>
            <img src={ bike } alt = "a pic" className="card--bike" />
            <div>
                <img src={ star} alt = "a pic" className="card--star" />
                <span>4.8 </span>
                <span>(2).</span>
                <span>USA</span>
            </div>
            <p>Group Mountain Biking</p>
            <p>From $50 / person</p>
        </div>

    </div>

  )
}

export default Card