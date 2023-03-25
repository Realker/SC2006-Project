import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBFAQ.jpg'
import '../css/FAQ.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MyAccount = () => {
  return (
    <div class = "FAQBackground">
      <NavBar/>

      <div className="second-nav">
        <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;My Account
      </div>
      
      <div className='FAQ__bg h1'>
      <h1>Account Details</h1>
      <div className = 'FAQCard'><h3>My Username:</h3>
      <h3>My Email:</h3></div>
      
      </div>
    </div>)
}

export default MyAccount