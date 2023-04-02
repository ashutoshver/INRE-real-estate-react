import React from 'react';
import './blogs.css';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const Blogs = () => {
  return (
    <div className='blogs'>
      <div className='blog'>
        <h1>Blogs</h1>
        <div className='all-blogcard'>
          <div className='blog-cards'>
            <img src='https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80' alt='house' />
            <p>Real Estate, Analysis</p>
            <div className='date-flex'>
              <p><FaCalendarAlt />  09 jun 2022</p>
              <p>By Admin</p>
            </div>
            <h1>Guide for personal property buying</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <button>View More <FaArrowRight /></button>
          </div>

          <div className='blog-cards'>
            <img src='https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80' alt='house' />
            <p className='blue'>Real Estate, Analysis</p>
            <div className='date-flex'>
              <p><FaCalendarAlt />  09 jun 2022</p>
              <p>By Admin</p>
            </div>
            <h1>Guide for personal property buying</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <button>View More <FaArrowRight /></button>
          </div>

          <div className='blog-cards'>
            <img src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80' alt='house' />
            <p>Real Estate, Analysis</p>
            <div className='date-flex'>
              <p><FaCalendarAlt />  09 jun 2022</p>
              <p>By Admin</p>
            </div>
            <h1>Guide for personal property buying</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <button>View More <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs