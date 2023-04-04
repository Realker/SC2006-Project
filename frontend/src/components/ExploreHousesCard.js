import React from 'react'
import '../css/ExploreHouses.css';
import btoBuilding from "../images/HDBMainpage1.jpg";
import {AiOutlineHeart}  from 'react-icons/ai';
import '../css/HouseCard.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SaveHousesToFavourites from './SaveHousesToFavourites';
import APIService from './APIService';
import {useState} from 'react';
import {useEffect} from 'react';
import Flat from './Flat';
import MyActivitiesCard from './MyActivitiesCard';
import DisplayFlatDetailsCard from './DisplayFlatDetailsCard';

export default function ExploreHousesCard(page) {
  var pageNum = page.page;
  var detailsTrue = page.detailsTrue;
  var true_settings = page.true_settings;
  const [streetName, setstreetName] = useState("LOADING...");
  const [flatModel, setflatModel] = useState("LOADING...");
  const [flatType, setflatType] = useState("LOADING...");
  const [floorArea, setfloorArea] = useState("LOADING...");
  const [remainingLease, setremainingLease] = useState("LOADING...");
  const [block, setblock] = useState("LOADING...");
  const [price, setPrice] = useState("LOADING...");
  const [idStr, setIdStr] = useState("");
  const [responded, setResponded] = useState(false);
  const [streetViewUrl, setStreetViewUrl] = useState('');
  const [buttonFlat, setButtonFlat] = useState(false);

useEffect(() => {
  APIService.RetrieveLatestHDB("1", pageNum)
  .then((response) => {
    setstreetName(response[0].street_name);
    setflatModel(response[0].flat_model);
    setflatType(response[0].flat_type);
    setfloorArea(response[0].floor_area_sqm);
    setremainingLease(response[0].remaining_lease);
    setblock(response[0].block);
    setPrice(response[0].resale_price);
    setIdStr(response[0].id_str);
    setResponded(true);
  })
  .catch((error) => {
    console.log(error);
  });
}, [pageNum]);

  /*Google Maps API*/
  if (responded){
    APIService.hdb_street_view(block, streetName)
    .then((response) => {
      setStreetViewUrl(response.streetViewUrl);
      setResponded(false);
    })
    .catch((error) => {
      console.log(error);
    });

    APIService.hdb_nearby_facilities(block, streetName, "school", "100")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
          <div className='Housecard'>
            <img src={streetViewUrl} className='Housecard__img'></img>
            <div className='Housecard__content'>
              <div className='Housecard__content__icons'>
              {true_settings ? (
              <Link to={{
                pathname: '/SaveHousesToFavourites',
                search: `?id_str=${idStr}`
                }}>
                <div className='Housecard__content__icons__heart'> <AiOutlineHeart/></div>
              </Link>
            )
            :
            (<br></br>)
            }

              {detailsTrue ? (
              <div className="open-flat-container">
                <button onClick={() => (setButtonFlat(true))}>Open Flat Details</button>
              </div>
              )
              :
                (<br></br>)
              }
              </div>
              <p className='Housecard__content__street'>BLK {block} {streetName}</p>
              <p className=''>Resale price: SGD {price}</p>
              <p className=''>Flat model: {flatModel}</p>
              <p className=''>Flat type: {flatType}</p>
              <p className=''>Floor area: {floorArea} sqm</p>
              <p className=''>Remaining lease: {remainingLease}</p>
            </div>

          </div>

          <Flat trigger={buttonFlat} setTrigger={setButtonFlat}>
            <h3>Resale Flat Details</h3>
            <p>Scroll down for more information.</p>
            {(<MyActivitiesCard id_hdb={idStr}  true_settings={false} />)}
            <br></br>
            {<DisplayFlatDetailsCard block={block} street_name={streetName}/>}
          </Flat>
    </>
  );
}