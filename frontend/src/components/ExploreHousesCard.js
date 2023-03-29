import React from 'react'
import '../css/ExploreHouses.css';
import btoBuilding from "../images/HDBMainpage1.jpg";
import {AiOutlineHeart}  from 'react-icons/ai';
import '../css/HouseCard.css';
import { NavLink } from 'react-router-dom';
import SaveHousesToFavourites from './SaveHousesToFavourites';
import APIService from './APIService'
import {useState} from 'react'

export default function ExploreHousesCard(page) {
  var pageNum = page.page;
  const [streetName, setstreetName] = useState("NO STREET");
  const [flatModel, setflatModel] = useState("NO MODEL");
  const [flatType, setflatType] = useState("NO TYPE");
  const [floorArea, setfloorArea] = useState("NO AREA");
  const [remainingLease, setremainingLease] = useState("NO LEASE");
  const [block, setblock] = useState("NO BLOCK");
  const [price, setPrice] = useState("NO PRICE");


  APIService.RetrieveLatestHDB("1", pageNum)
  .then((response) => {
    setstreetName(response[0].street_name);
    setflatModel(response[0].flat_model);
    setflatType(response[0].flat_type);
    setfloorArea(response[0].floor_area_sqm);
    setremainingLease(response[0].remaining_lease);
    setblock(response[0].block);
    setPrice(response[0].resale_price);
  })
  .catch((error) => {
    console.log(error);
  });

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
              <p className='Housecard__content__street'>{streetName}</p>
              <p className=''>Resale price: SGD {price}</p>
              <p className=''>Flat model: {flatModel}</p>
              <p className=''>Flat type: {flatType}</p>
              <p className=''>Block number: {block}</p>
              <p className=''>Floor area: {floorArea} sqm</p>
              <p className=''>Remaining lease: {remainingLease}</p>
            </div>

          </div>
    </>
  );
}