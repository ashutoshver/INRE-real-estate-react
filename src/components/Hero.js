import React from 'react'
import './hero.css'
import banner from '../Images/banner.png'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-img'>
                    <img src={banner} alt='banner' />
                </div>
                <div className='banner2'>
                    <div className='hero-img2'>
                        <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='hero2' />
                    </div>
                    <div className='hero2-content'>
                        <h1>Who We Are</h1>
                        <p>The Indian real state sector is resilient despite global headwings. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021).
                            However, the whole real estate purchase journey is very tedious and takes more than 2 years on average.
                            Further, as the ticket size of this investment is large, security and trust become quite critical. Problems
                            compound when you are currently away from your purchase destination. If you are experiencing difficulties
                            in the real estate purchase journey, we are here to make it fast and transparent.</p>

                        <button>Contact Now <FaArrowRight /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero