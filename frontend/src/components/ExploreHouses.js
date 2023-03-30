import React from 'react'
import NavBar from './NavBar';
import ExploreHousesCard from './ExploreHousesCard';
import '../css/ExploreHouses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DivisionNavBar from './DivisionNavBar';

export default function ExploreHouses() {
  return (
    <>
        <div class = "Explorehouses__bg">
          <NavBar/>
          <div className="second-nav">
            <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;Explore Houses
          </div>

          <h1> Explore Top 3 Houses</h1>
          <div className='Housecards'>
            {
              // Generate ExploreHousesCard components dynamically using a for loop
              (() => {
                const num_of_cards = 3;
                const cards = [];
                for (let i = 1; i <= num_of_cards; i++) {
                  cards.push(<ExploreHousesCard page={i.toString()} />);
                }
                return cards;
              })()
            }
          </div>

        </div>
        <div class= "DivisionBackGround">
           <DivisionNavBar />

          </div>

    </>
  );
}