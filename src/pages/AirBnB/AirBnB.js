import React from 'react';
import Navbar from '../../components/AirBnB/Navbar';
import HeroSection  from '../../components/AirBnB/HeroSection';
import Card from '../../components/AirBnB/Card';
import data from "../../components/AirBnB/data";


const AirBnB = () => {

  const datas = data.map( item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        />
        )
    })


  return (
    <div>

      < Navbar/>
      <HeroSection />
      {datas}

    </div>
  )
}

export default AirBnB


