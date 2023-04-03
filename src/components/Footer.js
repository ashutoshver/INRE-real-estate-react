import React from 'react';
import './footer.css';
import {FaEnvelope , FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneVolume, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-logo'>
            <img src='https://inre.lt/wp-content/uploads/2018/12/INRE_LOGO_BRandbook_100x47px.png' alt='inre'/>
            </div>
            <div className='company-list'>
                <h1>Company</h1>
            
                    <p>Home</p>
                    <p>Our Offerings</p>
                    <p>Our Team</p>
                    <p>Contact Us</p>
                
            </div>
            <div className='useful-link'>
                <h1>Useful Links</h1>
                
                    <p>Blogs</p>
                    <p>FAQ's</p>
                
            </div>
            <div className='social-contact'>
                <div className='social-icon'>
                    <div className='icon'><FaEnvelope /></div>
                    <div className='icon-content'>
                        <h1>Email:</h1>
                        <p>support@inreglobal.com</p>
                    </div>
                </div>

                <div className='social-icon phone'>
                    <div className='icon'><FaPhoneVolume /></div>
                    <div className='icon-content'>
                        <h1>Phone:</h1>
                        <p>+90 | 7019305889</p>
                    </div>
                </div>
            </div>
           
        </div>
        <div className='copyright-section'>
                <div className='copyright'>
                    <p>Copyright 2023. Designed by INRE Global</p>
                </div>
                <div className='copy-social'>
                    <p><span><FaLinkedinIn /> </span>Linkdin</p>
                    <p><span><FaFacebookF /> </span>Linkdin</p>
                    <p><span><FaTwitter /> </span>Linkdin</p>
                    <p><span><FaInstagram /> </span>Linkdin</p>
                </div>
            </div>
    </div>
  )
}

export default Footer