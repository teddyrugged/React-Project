import React from 'react';
import './Navbar.css';
import star from './images/Star 1.svg';
// import wedding from './images/wedding-photography 1.svg';
// import bike from './images/mountain-bike 1.svg';

const Card = (props) => {
    // console.log(props.openSpots)
  return (
    <div className='card--grid'>
        <div className='card--one'>
            {props.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>}
            <img src={props.img} alt = "a pic" className="card--man" />
            {/* <img src={require('./images/' + props.img)} alt = "a pic" className="card--man" /> */}
            <div className="card--set">
                <img src={ star} alt = "a pic" className="card--star" />
                <span>{ props.rating } </span>
                <span className="gray">({props.reviewCount}) {""}.</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='tag--bold'>From ${ props.price}</span>/ person</p>
        </div>
    </div>

  )
}

export default Card






// eslint-disable-next-line
{/* <div className='card--one'>
            <img src={`../AirBnB/images/  ${ props.img}` } alt = "a pic" className="card--man" /> */}
            // eslint-disable-next-line
            {/* <img src={require('./images/' + props.img)} alt = "a pic" className="card--man" /> */}
            // eslint-disable-next-line
            {/* <div className="card--set">
                <img src={ star} alt = "a pic" className="card--star" />
                <span>{ props.rating } </span>
                <span className="gray">({props.reviewCount}) {""}.</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='tag--bold'>From ${ props.price}</span>/ person</p>
</div> */}



{/* <div className='card--two'>
            <img src={ wedding } alt = "a pic" className="card--wedding" />
            <div>
                <div className="card--set">
                    <img src={ star} alt = "a pic" className="card--star" />
                    <span>5.0 </span>
                    <span className="gray">(30).</span>
                    <span className="gray">USA</span>
                </div>

            </div>
            <p>Learn wedding photography</p>
            <p><span className='tag--bold'>From $125 </span>/ person</p>
        </div> */}
        {/* <div className='card--three'>
            <img src={ bike } alt = "a pic" className="card--bike" />
            <div>

                <div className="card--set">
                    <img src={ star} alt = "a pic" className="card--star" />
                    <span>4.8 </span>
                    <span className="gray">(2).</span>
                    <span className="gray">USA</span>
                </div>
            </div>
            <p>Group Mountain Biking</p>
            <p><span className='tag--bold'>From $50 </span>/ person</p>
        </div> */}