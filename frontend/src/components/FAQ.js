import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBFAQ.jpg'
import '../css/FAQ.css'
const FAQ = () => {
  return (
    <div class = "FAQBackground">
      
      <NavBar/>
      <div className='FAQ__bg h1'>
      <h1>Frequently Asked Questions (FAQs):</h1>
      <div class = 'FAQCard'>
        <div class = "FAQcontent">
          <h1>What is the purpose of this website?</h1>
          <h2>This website displays information on the current pricing of public resale HDB flats in Singapore, along with a history of past sale records and prices. Our website layout will allow potential buyers to easily compare and review prices of resale flats, so that they can make better informed decisions when buying flats.</h2>
        </div>
        <div class = "FAQcontent">
          <h1>
Does this website show prices of new HDB flats and/or private housing units?</h1>
<h2>No. This website is limited to information on resale HDB flats only.</h2>
        </div>
        <div class = "FAQcontent">
          <h1>How do I understand the pricing history of a particular resale flat?</h1>
          <h2>The history of resale pricing of a particular flat will be displayed in the form of a table as well as a graph, allowing users to easily identify trends in the price changes over the years. The website will also show information on neighbouring flats with similar features and type, enabling easy comparison.</h2>
        </div>
        <div class = "FAQcontent">
          <h1>What other information will be displayed on the website?</h1>
          <h2>In addition to pricing history, users will also be able to see a list of facilities within the surrounding region of the resale flat, including MRT stations, bus interchanges and/or bus stops, as well as the nearest schools in the area.</h2>
        </div>
        <div class = "FAQcontent">
          <h1>I saw a particular house which I am interested in buying, and I would like to save a record of it. Is it possible for me to do so?</h1>
          <h2>Yes, users who are registered with our website will be able to save their favourite resale flats into their account’s favourites list. The list can be modified at any time.</h2>
        </div>
        <div class = "FAQcontent">
          <h1>Can I use this site to buy/sell/rent a HDB flat?</h1>
          <h2>No. Please visit the official HDB Portal or another property market website like PropertyGuru to make new property transactions. This website only provides listings of resale price trends.</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FAQ


