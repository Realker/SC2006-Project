import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import ‘./App.css’;


// Add this import statement at the top of the Homepage.js file
import Search from './Search';

// Replace the search section comment in the Homepage.js file
<section className="search">
  <Search />
</section>
// Add this import statement at the top of the Homepage.js file
import NavBar from './NavBar';

// Replace the navigation items comment in the Homepage.js file
<nav className="navbar">
  <NavBar />
</nav>


function Homepage() {
    return (
      <div className="App">
        <header className="header">
          <nav className="navbar">
            {/* Insert your navigation items here */}
          </nav>
        </header>
        <main className="main">
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




