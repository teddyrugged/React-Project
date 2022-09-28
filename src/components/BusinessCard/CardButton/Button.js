import React from 'react';
import './Button.css';
import { SiLinkedin } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

const Button = () => {
  return (
    // <div className='button'>
    //     {/* <button className='emailbutton'> < MdMail />Email</button> */}
    //     <button type="button" class="btn btn-primary btn-lg" > < MdMail /> Email</button>

    //     <button className='linkedinbutton'> <SiLinkedin /> LinkedIn</button>
    // </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
      <button class="btn btn-primary me-md-2" type="button">< MdMail />Email</button>
      <button class="btn btn-primary" type="button"><SiLinkedin />Button</button>
  </div>
  )
}

export default Button
