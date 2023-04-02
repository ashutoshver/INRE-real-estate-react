import React from 'react'
import './offering.css'
import {FaArrowRight} from 'react-icons/fa';

const Offering = () => {
  return (
    <div className='offering'>
      <div className='offering-content'>
        <h1>Our Offerings</h1>
        <p>This whole purchase journey can be divided into three stages. For more details,
          <span> Click Here</span></p>
        <div className='booking'>
          <div className='book pre-booking'><span>1</span>Pre-Booking</div>
          <div className='book post'><span>2</span>Post-Booking & <br/> Pre-Registration</div>
          <div className='book post-booking'><span>3</span>Post-Registration</div>
        </div>

        <div className='booking-card'>
          <div className='process'>
            <img src='https://www.printonweb.in/images/paper/paper4.webp' alt='doc' />
            <h1>Background Verification</h1>
            <p>Assuring your capital is in safe hands, we provide detailed verification reports of the 
              project and developer. These are customized and detailed...</p>
              <button>Contact us <FaArrowRight /></button>
          </div>
          <div className='process'>
            <img src='https://is1-3.housingcdn.com/4f2250e8/7ba22281de39d995f5a7bbba59b8d9ba/v0/large/vantage_venus-pozhichalur-chennai-vantage_housing_developers.jpeg.webp' alt='doc' />
            <h1>Virtual site visit</h1>
            <p>It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist
              with an AI-enabled UAV...</p>
              <button>Contact us <FaArrowRight /> </button>
          </div>
          <div className='process'>
            <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='doc' />
            <h1>Title diligence</h1>
            <p>Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civilcases 
              in india. We have a panel of...</p>
              <button>Contact us <FaArrowRight /> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offering