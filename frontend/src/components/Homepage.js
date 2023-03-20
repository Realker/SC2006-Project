import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/App.css';
import NavBar from './NavBar';

// Add this import statement at the top of the Homepage.js file
//import Search from './Search';

// Replace the search section comment in the Homepage.js file
//<section className="search">
 // <Search />
//<section>
// Add this import statement at the top of the Homepage.js file


// Replace the navigation items comment in the Homepage.js file



function Homepage() {
    return (

        
      <div className="App">
        
        <header className="header">
          <nav className="navbar">
          <h1>Fk this</h1>
          </nav>
        </header>
        <main className="main">
        <h1> Fk you </h1>
          <section className="search">
            {/* Insert your search component here */}
          </section>
          <section className="explore-recent">
            {/* Insert your explore recent component here */}
          </section>
          <section className="faq">
            {/* Insert your FAQ component here */}
          </section>
        </main>
        <footer className="footer">
          {/* Insert your footer content here */}
        </footer>
      </div>
    );
  }
  
  export default Homepage;




