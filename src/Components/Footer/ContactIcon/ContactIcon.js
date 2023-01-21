import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function ContactIcon() {
  return (
    <div className='col-md-6 col-12'>
        <div className='row'>
        <div className='col-md-3 col-12'>
        <FontAwesomeIcon icon={faFacebook} style={{color:'blue'}}/>
        <a style={{textDecoration:'none'}} href='https://www.facebook.com/evan.shareef'>
            Hasibur Rahman
        </a>
        </div>
        <div className='col-md-3 col-12'>
        <FontAwesomeIcon icon={faLinkedin} style={{color:'blue'}}/>
        <a style={{textDecoration:'none'}} href='https://linkedin.com/in/evan-shareef'>
            Hasibur Rahman
        </a>
        </div>
        <div className='col-md-3 col-12'>
        <FontAwesomeIcon icon={faGithub} style={{color:'black'}}/>
        <a style={{textDecoration:'none'}} href='https://github.com/Evan-CSE/'>
            Evan-CSE
        </a>
        </div>
        </div>
      </div>
  )
}
