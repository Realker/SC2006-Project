import React, { useState } from 'react'
import NavBar from './NavBar';
import ExploreHousesCard from './ExploreHousesCard';
import btoBuilding from "../images/HDBMainpage1.jpg";
import '../css/ExploreHouses.css';
import '../css/DisplayFlat.css';
import Flat from './Flat';

/*
function DisplayFlat() {

  const [showFlat, setShowFlat] = useState(false);

  function handleClick() {
    setShowFlat(!showFlat);
  }

  return (
    <>
    <NavBar/>
      <img src={btoBuilding} alt="image" onClick={handleClick} />
      {showFlat && <Flat />}
    </>
  );
}
*/

function DisplayFlat() {
  const [buttonFlat, setButtonFlat] = useState(false);

  return (
    <div className= "DisplayFlat">
      <NavBar/>

      <main>
        <h1>Display Flat Details</h1>
        <br/><br/>
        <button onClick={() => setButtonFlat(true)}>Open Flat</button>
        </main>

        <Flat trigger={buttonFlat} setTrigger={setButtonFlat}>
          <h3>Condominium 1</h3>
          <p>Exclusive Expensive</p>
          <ExploreHousesCard/>
        </Flat>
    </div>
  );
}

export default DisplayFlat;

