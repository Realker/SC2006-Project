import React from 'react'
import '../css/ExploreHouses.css';
import btoBuilding from "../images/HDBMainpage1.jpg";
import {AiOutlineHeart}  from 'react-icons/ai';
import '../css/HouseCard.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DeleteFromFavourites from './DeleteFromFavourites';
import APIService from './APIService';
import {useState} from 'react';
import {useEffect} from 'react';

export default function MyActivitiesCard(id_hdb) {
  var id_str_hdb = id_hdb.id_hdb;
  var id = id_hdb.id_true;
  const [result, setResult] = useState([]);
  const [streetName, setstreetName] = useState("LOADING...");
  const [flatModel, setflatModel] = useState("LOADING...");
  const [flatType, setflatType] = useState("LOADING...");
  const [floorArea, setfloorArea] = useState("LOADING...");
  const [remainingLease, setremainingLease] = useState("LOADING...");
  const [block, setblock] = useState("LOADING...");
  const [price, setPrice] = useState("LOADING...");

  useEffect(() => {
    APIService.FilterHDB( null, //list_size
                          null, //page_num
                          null, //town
                          null, //flat_type
                          null, //flat_model
                          null, //floor_area_sqm
                          null, //minSqm
                          null, //maxSqm
                          null, //street_name
                          null, //resale_price
                          null, //min_resale_price
                          null, //max_resale_price
                          null, //month
                          null, //remaining_lease
                          null, //lease_commence_date
                          null, //storey_range
                          id_str_hdb, //id_str
                          null, //block
                          null) //filter_param
      .then((response) => {
        setResult(response);
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
  }, [id_str_hdb]);


  // APIService.RetrieveLatestHDB("1", pageNum)
  // .then((response) => {
  //   setstreetName(response[0].street_name);
  //   setflatModel(response[0].flat_model);
  //   setflatType(response[0].flat_type);
  //   setfloorArea(response[0].floor_area_sqm);
  //   setremainingLease(response[0].remaining_lease);
  //   setblock(response[0].block);
  //   setPrice(response[0].resale_price);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  return (
    <>
          <div className='Housecard'>
            <img src={btoBuilding} className='Housecard__img'></img>
            <div className='Housecard__content'>
              <div className='Housecard__content__icons'>

              <Link to={{
                pathname: '/DeleteFromFavourites',
                search: `?id_true=${id}`
                }}>
                <div className='Housecard__content__icons__heart'> <AiOutlineHeart/></div>
              </Link>

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