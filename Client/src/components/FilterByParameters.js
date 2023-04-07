import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/FilterByParameters.css'
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

//FBPBackground = FilterByParametersBackGround
const FilterByParameters = () => {

  const [month, setMonth] = useState('');
  const [town, setTown] = useState('');
  const [flat_Type, setFlat_Type] = useState('');
  const [block, setBlock] = useState('');
  const [floor_area_sqm, setFloor_Area_Sqm] = useState(0);
  const [flat_model, setFlat_Model] = useState('');
  const [remaining_lease, setRemaining_Lease] = useState(0);
  const [resale_price, setResale_Price] = useState('');

  //Testing in progress
  const search = () => {
    // Filter search results based on selected filter values
    // ...
  };

  return (
    <div class = "FBPBackground">
    <NavBar/> 

      <div className="second-nav">
        <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;Check Pricing
      </div>

    <div className="filter-parameters">

    {/* Filter by Month */}
    <label for="date-input">Select a Date:</label>
    <input type="date" 
        id="date-input" 
        value={month} onChange={(e) => setMonth(e.target.value)}
        name="date" 
        required min="1960-01-01" 
        max="2023-03-31">
    </input>
    <br></br><br></br>

    {/* Filter by Town */}
    <input type="text" 
        className="town-input"
        id="searchTown" 
        list="searchTown" 
        placeholder="Search Town" 
        value={town} onChange={(e) => setTown(e.target.value)}
    />
    <br></br><br></br>

    {/* Filter by FlatType (Property) */}
    <select value={flat_Type} onChange={(e) => setFlat_Type(e.target.value)}>
        <option value="">No. of Bedrooms</option>
        <option value="1 ROOM">1 ROOM</option>
        <option value="2 ROOM">2 ROOM</option>
        <option value="3 ROOM">3 ROOM</option>
        <option value="4 ROOM">4 ROOM</option>
        <option value="5 ROOM">5 ROOM</option>
        <option value="EXECUTIVE">EXECUTIVE</option>
    </select>
    <br></br><br></br>

    {/* Filter by Block */}
    <label for="block-input">Block Number</label>
    <input type="text" 
        className="block-input"
        id="searchBlock" 
        list="searchBlock" 
        placeholder="Enter Block Num" 
        value={block} onChange={(e) => setBlock(e.target.value)}
    />
    <br></br><br></br>
    
    {/* Filter by Floor_Area_Sqm */}
    <label for="floor_area_input">Floor_Area_Sqm:</label>
    <input type="number"
        className="floor_area_sqm-input"
        id="floor_area-input"
        name="floor_area_sqm"
        value={floor_area_sqm} onChange={(e) => setFloor_Area_Sqm(e.target.value)}
    />
    <br></br><br></br>

    {/* Filter by Flat Model */}
    <label for="flat_model">Select Flat Model:</label>
    <select value={flat_model} onChange={(e) => setFlat_Model(e.target.value)}>
        <option value="">Flat Model</option>
        <option value="Apartment">Apartment</option>
        <option value="DBSS">DBSS</option>
        <option value="Improved">Improved</option>
        <option value="Model A">Model A</option>
        <option value="Model A2">Model A2</option>
        <option value="Model A-Maisonette">Model A-Maisonette</option>
        <option value="New Generation">New Generation</option>
        <option value="PremiumApartment">Premium Apartment</option>
        <option value="Simplfied">Simplfied</option>
        <option value="Terrace">Terrace</option>
        <option value="Type S1">Type S1</option>
        <option value="Type S2">Type S2</option>
    </select>
    <br></br><br></br>

    {/* Filter by Remaining lease */}
    <label for="remaining_lease">Remaining Lease:</label>
    <input type="text"
        className="remaining_lease-input"
        id="remaining_lease_input"
        name="remaining_lease_input"
        value={remaining_lease} onChange={(e) => setRemaining_Lease(e.target.value)}
    />
    <br></br><br></br>

    {/* Filter by Resale Price*/}
    <label for="resale_price">Resale Price:</label>
    <input type="number"
        className="resale_price-input"
        id="resale_price_input"
        name="resale_price_input"
        value={resale_price} onChange={(e) => setResale_Price(e.target.value)}
    />
    <br></br><br></br>

    {/* This search button is not linked yet */}
    &nbsp;<button className="filterButton">Search</button> 
      
    </div>
  </div>

  )
}

export default FilterByParameters;