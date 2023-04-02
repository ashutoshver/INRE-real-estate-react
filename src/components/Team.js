import React from 'react';
import './team.css';

const Team = () => {
  return (
    <div className='team'>
        <div className='members'>
            <h1>Our Team Members</h1>
            <div className='team-cards'>
                <div className='card'>
                    <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60' alt='person' />
                    <h2>Brajesh Pathak</h2>
                    <p>A Chartered Accountant & Compnay Secretary, has over a decade of experience in managing realty focused venture capital funds
                        and was heading Azure Capital Advisors Private Limited. He has also been... 
                    </p>
                    <a href='view more'>View more</a>
                </div>

                <div className='card'>
                    <img src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' alt='person' />
                    <h2>Brajesh Pathak</h2>
                    <p>A Chartered Accountant & Compnay Secretary, has over a decade of experience in managing realty focused venture capital funds
                        and was heading Azure Capital Advisors Private Limited. He has also been... 
                    </p>
                    <a href='view more'>View more</a>
                </div>

                <div className='card'>
                    <img src='https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400' alt='person' />
                    <h2>Brajesh Pathak</h2>
                    <p>A Chartered Accountant & Compnay Secretary, has over a decade of experience in managing realty focused venture capital funds
                        and was heading Azure Capital Advisors Private Limited. He has also been... 
                    </p>
                    <a href='view more'>View more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team;