import React from 'react'
import '../css/ExploreHouses.css';
import btoBuilding from "../images/HDBMainpage1.jpg";
import {AiFillHeart}  from 'react-icons/ai';
import '../css/HouseCard.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DeleteFromFavourites from './DeleteFromFavourites';
import APIService from './APIService';
import {useState} from 'react';
import {useEffect} from 'react';

export default function DisplayFlatDetailsCard(address) {
  var block = address.block;
  var street_name = address.street_name;
  const [facility, setFacility] = useState('school');
  const [radius, setRadius] = useState('750');
  const [results, setResults] = useState([]);
  const [mapViewUrl, setMapviewUrl] = useState();


  /*Google Maps API*/
  useEffect(() => {
    APIService.hdb_nearby_facilities(block, street_name, facility, radius)
    .then((response) => {
      setResults(response.facilities);
    })
    .catch((error) => {
      console.log(error);
    });

    APIService.hdb_map_view(block, street_name)
    .then((response) => {
      setMapviewUrl(response.mapViewUrl);
      console.log(response.mapViewUrl);
    })
    .catch((error) => {
      console.log(error);
    });

}, [block, street_name, facility, radius]);

  return (
    <>
          <div className='Housecard'>
            <div className='Housecard__content'>
              <div className='Housecard__content__icons'>
              </div>
              <p className='Housecard__content__street'>NEARBY FACILITIES - {radius}m Radius</p>
              <select value={facility} onChange={(e) => setFacility(e.target.value)}>
                <option value="school">Schools & Other Academic Facilities</option>
                <option value="subway_station">MRT Stations</option>
                <option value="bus_station">Bus Stops</option>
              </select>
              <br></br>
                {facility === 'school' && results.length > 0 && (
                <>
                <div className='Housecard__content__street'>Schools & Other Academic Facilities</div>
                <ul>
                    {results.map((facility) => (
                        <p key={facility.name}>{facility.name}</p>
                    ))}
                </ul>
                </>
                )}
                {facility === 'subway_station' && results.length > 0 && (
                <>
                <div className='Housecard__content__street'>MRT Stations</div>
                <ul>
                    {results.map((facility) => (
                        <p key={facility.name}>{facility.name} MRT</p>
                    ))}
                </ul>
                </>
                )}
                {facility === 'bus_station' && results.length > 0 && (
                <>
                <div className='Housecard__content__street'>Bus Stops</div>
                <ul>
                    {results.map((facility) => (
                        <p key={facility.name}>{facility.name}</p>
                    ))}
                </ul>
                </>
                )}

                <img src={mapViewUrl} className='Housecard__img'></img>
            </div>
          </div>
    </>
  );
}