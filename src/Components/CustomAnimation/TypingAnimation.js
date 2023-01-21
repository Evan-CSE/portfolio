import React, { useState, useEffect } from 'react';
import img1 from '../../asset/header_right.jpg'

const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [fullText, setFullText] = useState(`I am Hasibur Rahman`);
  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  return (
  <div className='row mt-1 align-items-center'>
    <div className='bg-warning col-md-6 col-sm-12'>
    <h1 className='text-primary text-center'>{displayedText}</h1>
  <p className='text-secondary text-justify text-center'>
  As a competitive programmer and technology enthusiast, I am constantly driven to push the boundaries of my abilities and discover new ways to solve problems. With a strong foundation in languages such as C, C++, JavaScript, and PHP, I am able to tackle a wide range of programming challenges. I am always experimenting and developing my own projects, and you can check out my Github profile to see some of my work. Let's work together to create something amazing!
  </p>
  </div>
  <div className='col-md-6 col-sm-12'>
    <img src={img1} style={{height:'100vh',width:'90%'}}/>
  </div>
  </div>);
};

export default TypingAnimation;
