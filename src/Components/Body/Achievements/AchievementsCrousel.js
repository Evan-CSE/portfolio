import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../asset/Achievements/nasa_space_apps_2019.jpg'
import image2 from '../../../asset/Achievements/research_presentation.jpg'
import image3 from '../../../asset/Achievements/nasa_space_apps_2021.jpg'
import image4 from '../../../asset/Achievements/icpc_2021.JPG'
export default function AchievementCrousel() {
  const images = [
    {
      source:image1,
      title:'Nasa Space Apps Challenge 2019',
      recognition:'Divisional Champion & Global Nominee',
      alterText:'Nasa Space Apps Challenge 2019'
    },
    {
      source:image2,
      title:'Research Presentation',
      recognition:'1st Runner Up',
      alterText:'JKKNIU Research Presentation'
    },
    {
      source:image3,
      title:'Nasa Space Apps Challenge 2021',
      recognition:'Divisional Champion',
      alterText:'Nasa Space Apps Challenge 2021'
    },
    {
      source:image4,
      title:'ICPC Asia Dhaka Regional 2021',
      recognition:'Divisional Champion',
      alterText:'ICPC Asia Dhaka Regional 2021'
    }
  ]
//   map images and pass them to carousel item
  return (
    <>
    <Carousel className='col-md-6'>
    {images.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={item.source} alt={item.title} 
          height={'500px'}
          />
          <Carousel.Caption>
            <h3 style={{color:'#ed11db'}}>{item.title}</h3>
            <p>{item.recognition}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}


