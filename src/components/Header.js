import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-flex'>
            <div className='logo'>
                <img src='https://inre.lt/wp-content/uploads/2018/12/INRE_LOGO_BRandbook_100x47px.png' alt='inre'/>
            </div>
            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>Our Offerings</li>
                    <li>Our Team</li>
                    <li>Contact Us</li>
                    <li>Blogs</li>
                </ul>
            </div>
            <div className='register'>
                <button>Register Now</button>
            </div>
        </div>
    </div>
  )
}

export default Header