import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'
export default function MessageMe() {
    const form = useRef();
    const SERVICE_ID = 'service_mp05vrv';
    const TEMPLATE_ID = 'template_bqfmu4p';
    const PUBLIC_KEY = 'rkDzWHa2gA3JGgQqK';
  const sendEmail = (e) => {
    e.preventDefault();
    alert("ok");
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID , form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='col-md-6 col-12'>
        <form ref={form} onSubmit={sendEmail}>
      <div className='form-group'>
      <label>Name</label>
      <input className='form-control' type="text" name="user_name" /> <br></br>
      </div>
      <div className='form-group'>
      <label>Email</label>
      <input className='form-control' type="email" name="user_email" /> <br></br>
      </div>
      <div className='form-group'>
      <label>Message</label>
      <textarea className='form-control' name="message" />
      </div>
      <input type="submit" className='mt-1 btn btn-primary' value="Send" />
    </form>
    </div>
  )
}
