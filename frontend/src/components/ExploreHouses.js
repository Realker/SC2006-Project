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
          

          <h1> Explore Top 3 Houses</h1>
          <div className='Housecards'>
            {
              // Generate ExploreHousesCard components dynamically using a for loop
              (() => {
                const num_of_cards = 3;
                const cards = [];
                for (let i = 1; i <= num_of_cards; i++) {
                  cards.push(<ExploreHousesCard page={i.toString()} detailsTrue={true} true_settings={true}/>);
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