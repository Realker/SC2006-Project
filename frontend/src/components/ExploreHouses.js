import React from 'react'
import NavBar from './NavBar';
import ExploreHousesCard from './ExploreHousesCard';
import '../css/ExploreHouses.css';


export default function ExploreHouses() {
  return (
    <>
        <div class = "Explorehouses__bg">
          <NavBar/>
          <h1> Explore Top 3 Houses</h1>
          <div className='Housecards'>
            <ExploreHousesCard/>
            <ExploreHousesCard/>
            <ExploreHousesCard/>
          </div>
        
        </div>
      
    </>
  );
}