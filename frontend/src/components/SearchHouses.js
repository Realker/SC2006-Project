import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import APIService from './APIService'
import SearchHousesPageBG from "../images/SearchHousesPage.jpg"
import NavBar from './NavBar'
import '../css/SearchHouses.css';
import {useLocation} from 'react-router-dom';
//import Homepage from './components/Homepage';
//import Search from './components/Search';

const SearchHouses = () => {
  const location = useLocation();
  const townFilter = new URLSearchParams(location.search).get('town');
  const flatModelFilter = new URLSearchParams(location.search).get('flatModel');
  const priceRangeFilter = new URLSearchParams(location.search).get('priceRange');
  const flatTypeFilter = new URLSearchParams(location.search).get('flatType');
  const pageNumFilter = new URLSearchParams(location.search).get('pageNum');
  var minPriceFilter;
  var maxPriceFilter;
  const [searchResults, setSearchResults] = useState([]);
  const [pageInput, setPageInput] = useState("");

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

  useEffect(() => {
    APIService.FilterHDB( "10", //list_size
                          pageNumFilter, //page_num
                          townFilter, //town
                          flatTypeFilter, //flat_type
                          flatModelFilter, //flat_model
                          null, //floor_area_sqm
                          null, //street_name
                          null, //resale_price
                          minPriceFilter, //min_resale_price
                          maxPriceFilter, //max_resale_price
                          null, //month
                          null, //remaining_lease
                          null, //lease_commence_date
                          null, //storey_range
                          null, //id_str
                          null, //block
                          null) //filter_param
      .then((response) => {
        setSearchResults(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNumFilter, townFilter, flatTypeFilter, flatModelFilter, priceRangeFilter, minPriceFilter, maxPriceFilter]);



  return (
    <div className="SearchHousesPageBg">
      <NavBar/>
      <h1>Search Houses results</h1>
      <div className='SearchHousesCard'>
        <table className="table">
          <thead>
            <tr>
              <th>Town</th>
              <th>Flat Type</th>
              <th>Flat Model</th>
              <th>Floor Area</th>
              <th>Street Name</th>
              <th>Resale Price</th>
              <th>Month</th>
              <th>Remaining Lease</th>
              <th>Lease Commence</th>
              <th>Storey Range</th>
              <th>Block</th>
              <th>View Details</th>
              <th>Favourite</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.town}</td>
              <td>{item.flat_type}</td>
              <td>{item.flat_model}</td>
              <td>{item.floor_area_sqm} sqm</td>
              <td>{item.street_name}</td>
              <td>SGD {item.resale_price}</td>
              <td>{item.month}</td>
              <td>{item.remaining_lease}</td>
              <td>{item.lease_commence_date}</td>
              <td>{item.storey_range}</td>
              <td>{item.block}</td>
              <td><button>Link</button></td>
              <td><button>Link</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      <div className="page-num-container">
        <label htmlFor="page-num">Page number:</label>
        <input type="number" id="page-num" value={pageInput} onChange={(e) => setPageInput(e.target.value)}/>
        <Link to={{
          pathname: '/SearchHouses',
          search: `?town=${townFilter}&flatModel=${flatModelFilter}&priceRange=${priceRangeFilter}&flatType=${flatTypeFilter}&pageNum=${pageInput}`
        }}>
        <button onClick>Go</button>
        </Link>
      </div>
    </div>
  </div>
);
};

export default SearchHouses;