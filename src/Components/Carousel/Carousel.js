import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

function MyCarousel() {
  const [images,setImages] = useState([])
    useEffect(()=>{
        
    })
//   map images and pass them to carousel item
  return (
    <>
    <p style={{fontSize:'30px',borderBottom:'5px solid gray',padding:'15px',color:'blue'}}>
    Achievements
    </p>
    <Carousel className='mx-auto mt-1' style={{width:'96%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylakhCt8y8FCUhEI0ftLZ-cieEzeOSlykkA&usqp=CAU"
          alt="First slide"
          style={{height:'80vh'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default MyCarousel;
