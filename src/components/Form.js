import React from 'react';
import './form.css';
import person from '../Images/man-working.jpg'


const Form = () => {
  return (
    <div className='form'>
      <div className='form-flex'>
        <div className='input-form'>
          <h1>Get In Touch With Us To Connect</h1>
          <p>Contact Us</p>
          <label>Full name:</label>
          <input type="text" />
          <label>Email.address:</label>
          <input type="email" />
          <br/>
          <br/>
          <label>Mobile No.</label>
          <input type="tel" placeholder='+91 8793459873' />
          <label>Country</label>
          <input type="text" placeholder='banglore' />
          <br/>
          <br/>
          <label>Stages</label>
          <input type="text" />
          <br/>
          <br/>
          <button type='submit'>Submit</button>
        </div>
        <div className='form-img'>
          <img src={person} alt='person' />
        </div>
      </div>
    </div>
  )
}

export default Form;