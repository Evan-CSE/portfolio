import React from 'react'
import ContactIcon from './ContactIcon/ContactIcon'
import MessageMe from './MessageMe/MessageMe'

export default function Footer(){
    return (
        <>
            <p style={{fontSize:'30px',borderBottom:'5px solid gray',padding:'15px',color:'blue'}}>
      Contact Me
      </p>
      <div className='row align-items-center'>
        <MessageMe></MessageMe>
        <ContactIcon></ContactIcon>
      </div>
        </>
    )
}