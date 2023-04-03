import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import APIService from './APIService'
import SearchHousesPageBG from "../images/SearchHousesPage.jpg"
import NavBar from './NavBar'
import FilterByParametersBar from './FilterByParametersBar';
import '../css/SearchHouses.css';
import {useLocation} from 'react-router-dom';
import {AiOutlineHeart}  from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import DisplayFlatDetailsCard from './DisplayFlatDetailsCard';
import '../css/ExploreHouses.css';
import '../css/DisplayFlat.css';
import Flat from './Flat';
import ExploreHousesCard from './ExploreHousesCard';
import MyActivitiesCard from './MyActivitiesCard';

const SearchHouses = () => {
  const location = useLocation();
  const townFilter = new URLSearchParams(location.search).get('town') || "";
  const flatModelFilter = new URLSearchParams(location.search).get('flatModel') || "";
  const priceRangeFilter = new URLSearchParams(location.search).get('priceRange') || "";
  const flatTypeFilter = new URLSearchParams(location.search).get('flatType') || "";
  const pageNumFilter = new URLSearchParams(location.search).get('pageNum') || "";
  const minPriceTrue = new URLSearchParams(location.search).get('minPrice') || "";
  const maxPriceTrue = new URLSearchParams(location.search).get('maxPrice') || "";
  const monthFilter = new URLSearchParams(location.search).get('month') || "";
  const blockFilter = new URLSearchParams(location.search).get('block') || "";
  const minSqmFilter = new URLSearchParams(location.search).get('minSqm') || "";
  const maxSqmFilter = new URLSearchParams(location.search).get('maxSqm') || "";
  var minPriceFilter;
  var maxPriceFilter;
  const [searchResults, setSearchResults] = useState([]);
  const [pageInput, setPageInput] = useState("");
  const [buttonFlat, setButtonFlat] = useState(false);
  const [rowIndex, setRowIndex] = useState(0);

  switch (priceRangeFilter) {
    case "range1":
      minPriceFilter = "0";
      maxPriceFilter = "500000";
      break;
    case "range2":
      minPriceFilter = "500000";
      maxPriceFilter = "1000000";
      break;
    case "range3":
      minPriceFilter = "1000000";
      maxPriceFilter = "2000000";
      break;
    default:
      minPriceFilter = "";
      maxPriceFilter = "";
  }

  if (minPriceTrue)
  {minPriceFilter = minPriceTrue;}
  if (maxPriceTrue)
  {maxPriceFilter = maxPriceTrue;}

  useEffect(() => {
    APIService.FilterHDB( "10", //list_size
                          pageNumFilter, //page_num
                          townFilter, //town
                          flatTypeFilter, //flat_type
                          flatModelFilter, //flat_model
                          null, //floor_area_sqm
                          minSqmFilter, //minSqm
                          maxSqmFilter, //maxSqm
                          null, //street_name
                          null, //resale_price
                          minPriceFilter, //min_resale_price
                          maxPriceFilter, //max_resale_price
                          monthFilter, //month
                          null, //remaining_lease
                          null, //lease_commence_date
                          null, //storey_range
                          null, //id_str
                          blockFilter, //block
                          null) //filter_param
      .then((response) => {
        setSearchResults(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNumFilter, townFilter, flatTypeFilter, flatModelFilter, priceRangeFilter, minPriceFilter, maxPriceFilter, monthFilter, blockFilter]);



  return (
    <div className="SearchHousesPageBg">
      <NavBar/>

    {/* These code are for Home Icon > My Account */}
    <div className="second-nav" style={{ position: 'absolute'}}>
        <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;Search Results
    </div>
      <h1>Search Houses Results</h1>
      <FilterByParametersBar/>
      <div className='SearchHousesCard'>
        <table className="table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Town</th>
              <th>Block</th>
              <th>Street Name</th>
              <th>Storey Range</th>
              <th>Flat Type</th>
              <th>Flat Model</th>
              <th>Floor Area</th>
              <th>Resale Price</th>
              <th>Remaining Lease</th>
              <th>Lease Commence</th>
              <th>View Details</th>
              <th>Favourite</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item,index) => (
            <tr key={item.id}>
              <td>{item.month}</td>
              <td>{item.town}</td>
              <td>{item.block}</td>
              <td>{item.street_name}</td>
              <td>{item.storey_range}</td>
              <td>{item.flat_type}</td>
              <td>{item.flat_model}</td>
              <td>{item.floor_area_sqm} sqm</td>
              <td>SGD {item.resale_price}</td>
              <td>{item.remaining_lease}</td>
              <td>{item.lease_commence_date}</td>
              <td>
              <button onClick={() => (setButtonFlat(true), setRowIndex(index))}>Open Flat</button>
              </td>
              <td>
                <Link to={{
                  pathname: '/SaveHousesToFavourites',
                  search: `?id_str=${item.id_str}`
                  }}>
                  <div className='Housecard__content__icons__heart'> <AiOutlineHeart/></div>
                </Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

      <Flat trigger={buttonFlat} setTrigger={setButtonFlat}>
        <h3>Resale Flat Details</h3>
        <p>Scroll down for more information.</p>
        {searchResults.length > 0 && (<MyActivitiesCard id_hdb={searchResults[rowIndex].id_str} />)}
        <br></br>
        {searchResults.length > 0 &&<DisplayFlatDetailsCard block={searchResults[rowIndex].block} street_name={searchResults[rowIndex].street_name}/>}
      </Flat>

      <div className="page-num-container">
        <label htmlFor="page-num">Page number:</label>
        <input type="number" id="page-num" value={pageInput} onChange={(e) => setPageInput(e.target.value)}/>
        <Link to={{
          pathname: '/SearchHouses',
          search: `?town=${townFilter}&flatModel=${flatModelFilter}&priceRange=${priceRangeFilter}&flatType=${flatTypeFilter}&pageNum=${pageInput}&minPrice=${minPriceTrue}&maxPrice=${maxPriceTrue}&month=${monthFilter}&block=${blockFilter}&minSqm=${minSqmFilter}&maxSqm=${maxSqmFilter}`
        }}>
        <button onClick>Go</button>
        </Link>
      </div>
    </div>
  </div>
);
};

export default SearchHouses;