import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBFAQ.jpg'
import '../css/FAQ.css'
const MyAccount = () => {
  return (
    <div class = "FAQBackground">
      
      <NavBar/>
      <div className='FAQ__bg h1'>
      <h1>Account Details</h1>
      
      <h2>My Username:</h2>
      <h2>My Email:</h2>
      </div>
    </div>)
}

export default MyAccount