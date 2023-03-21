import React from 'react'
import '../css/ExploreHouses.css';
import btoBuilding from "../images/HDBMainpage1.jpg";
import {AiOutlineHeart}  from 'react-icons/ai';
import '../css/HouseCard.css';
import { NavLink } from 'react-router-dom';
import SaveHousesToFavourites from './SaveHousesToFavourites';

export default function ExploreHousesCard() {



  return (
    <>
          <div className='Housecard'>
            <img src={btoBuilding} className='Housecard__img'></img>
            <div className='Housecard__content'>
              <div className='Housecard__content__icons'>
              <NavLink to="/SaveHousesToFavourites" className="">
                <div className='Housecard__content__icons__heart'> <AiOutlineHeart/></div>
              </NavLink>
              
              </div>
              <p className='Housecard__content__street'>Hougang Street 32</p>
              <p className=''>Price: </p>
              <p className=''>No.of bedroom: </p>
              <p className=''>Flat type: </p>
              <p className=''>Block number: </p>
              <p className=''>Floor area: </p>
              <p className=''>Years of lease left: </p>      
            </div>

          </div>      
    </>
  );
}