import React from 'react';
import Navbar from '../Components/Navbar';

function Main() {
  return (
    <div>
      <Navbar />
      <div className="intro-component-container">
        <div className="intro-component-wrapper">
            <div className="left-container">
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <button>Learn More</button>
            </div>
            <div className="right-container">
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main;