import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/FilterByParametersBar.css';

const FilterByParametersBar = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSqm, setMinSqm] = useState('');
  const [maxSqm, setMaxSqm] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [town, setTown] = useState('');
  const [flatType, setFlatType] = useState('');
  const [flatModel, setFlatModel] = useState('');
  const [block, setBlock] = useState('');

  const handleTransactionDateChange = (date) => {
    const formattedDate = date.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit'}).split('/').reverse().join('-');
    handleDateFormat(date);
    setTransactionDate(date);
  };

  const handleDateFormat = (stringValue) => {
    const formattedDate = stringValue.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit'}).split('/').reverse().join('-');
    console.log(formattedDate);
    setFormattedDate(formattedDate);
  }

  const handleTownChange = (event) => {
    setTown(event.target.value);
  };

  const handleFlatTypeChange = (event) => {
    setFlatType(event.target.value);
  };

  const handleFlatModelChange = (event) => {
    setFlatModel(event.target.value);
  };

  const handleBlockChange = (event) => {
    setBlock(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // perform filtering based on the selected parameters
    // ...
  };

  return (
    <div className="filter-bar">
      <div className="filter-by-parameters-card">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="min-price">Min. Resale Price:</label>
              <input type="number" className="form-control" id="min-price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="max-price">Max. Resale Price:</label>
              <input type="number" className="form-control" id="max-price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="max-price">Min. Floor Area (sqm):</label>
              <input type="number" className="form-control" id="min-sqm" value={minSqm} onChange={(e) => setMinSqm(e.target.value)} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="max-price">Max. Floor Area (sqm):</label>
              <input type="number" className="form-control" id="max-sqm" value={maxSqm} onChange={(e) => setMaxSqm(e.target.value)} />
            </div>
            <div className="form-group col-md-3" style={{ marginTop: '7px'}}>
              <label htmlFor="transaction-date" style={{ marginBottom: '20px'}}>Date of Transaction:</label>
                <DatePicker
                  id="transaction-date"
                  selected={transactionDate}
                  onChange={handleTransactionDateChange}
                  dateFormat="yyyy-MM"
                  showMonthYearPicker
                  className="form-control"
                />
            </div>
            <div className="form-group col-md-2" style={{ marginTop: '7px'}}>
              <label htmlFor="town" style={{ marginBottom: '20px'}}>Town:</label>
              <select id="town" className="form-control" value={town} onChange={handleTownChange}>
                <option value="">Choose...</option>
                <option value="ANG MO KIO">ANG MO KIO</option>
                <option value="BEDOK">BEDOK</option>
                <option value="BISHAN">BISHAN</option>
                <option value="BUKIT BATOK">BUKIT BATOK</option>
                <option value="BUKIT MERAH">BUKIT MERAH</option>
                <option value="BUKIT PANJANG">BUKIT PANJANG</option>
                <option value="BUKIT TIMAH">BUKIT TIMAH</option>
                <option value="CENTRAL AREA">CENTRAL AREA</option>
                <option value="CHOA CHU KANG">CHOA CHU KANG</option>
                <option value="CLEMENTI">CLEMENTI</option>
                <option value="GEYLANG">GEYLANG</option>
                <option value="HOUGANG">HOUGANG</option>
                <option value="JURONG EAST">JURONG EAST</option>
                <option value="JURONG WEST">JURONG WEST</option>
                <option value="KALLANG/WHAMPOA">KALLANG/WHAMPOA</option>
                <option value="MARINE PARADE">MARINE PARADE</option>
                <option value="PASIR RIS">PASIR RIS</option>
                <option value="PUNGGOL">PUNGGOL</option>
                <option value="QUEENSTOWN">QUEENSTOWN</option>
                <option value="SEMBAWANG">SEMBAWANG</option>
                <option value="SENGKANG">SENGKANG</option>
                <option value="SERANGOOM">SERANGOOM</option>
                <option value="TAMPINES">TAMPINES</option>
                <option value="TOA PAYOH">TOA PAYOH</option>
                <option value="WOODLANDS">WOODLANDS</option>
                <option value="YISHUN">YISHUN</option>
              </select>
            </div>
            <div className="form-group col-md-2" style={{ marginTop: '7px'}}>
              <label htmlFor="flat-type" style={{ marginBottom: '20px'}}>Flat Type:</label>
              <select id="flat-type" className="form-control" value={flatType} onChange={handleFlatTypeChange}>
                <option value="">Choose...</option>
                <option value="1 ROOM">1 ROOM</option>
                <option value="2 ROOM">2 ROOM</option>
                <option value="3 ROOM">3 ROOM</option>
                <option value="4 ROOM">4 ROOM</option>
                <option value="5 ROOM">5 ROOM</option>
                <option value="EXECUTIVE">EXECUTIVE</option>
                <option value="MULTI-GENERATION">MULTI-GENERATION</option>
              </select>
            </div>
            <div className="form-group">
          <label htmlFor="flat-model">Flat Model:</label>
          <select id="flat-model" className="form-control" value={flatModel} onChange={handleFlatModelChange}>
            <option value="">Select</option>
            <option value="2-room">2-room</option>
            <option value="3Gen">3Gen</option>
            <option value="Adjoined flat">Adjoined flat</option>
            <option value="Apartment">Apartment</option>
            <option value="DBSS">DBSS</option>
            <option value="Improved">Improved</option>
            <option value="Improved-Maisonette">Improved-Maisonette</option>
            <option value="Maisonette">Maisonette</option>
            <option value="Model A">Model A</option>
            <option value="Model A2">Model A2</option>
            <option value="Model A-Maisonette">Model A-Maisonette</option>
            <option value="Multi Generation">Multi Generation</option>
            <option value="New Generation">New Generation</option>
            <option value="Premium Apartment">Premium Apartment</option>
            <option value="Premium Apartment Loft">Premium Apartment Loft</option>
            <option value="Premium Maisonette">Premium Maisonette</option>
            <option value="Simplified">Simplified</option>
            <option value="Standard">Standard</option>
            <option value="Terrace">Terrace</option>
            <option value="Type S1">Type S1</option>
            <option value="Type S2">Type S2</option>
          </select>
        </div>
        <div className="form-group" style={{ marginTop: '5px'}}>
          <label htmlFor="block" style={{ marginBottom: '20px'}}>Block:</label>
          <input type="text" className="form-control" id="block" placeholder="" value={block} onChange={handleBlockChange} />
        </div>
      </div>
    </form>
    <div className="apply-button">
        <Link to={{
          pathname: '/SearchHouses',
          search: `?town=${town}&flatModel=${flatModel}&minPrice=${minPrice}&maxPrice=${maxPrice}&flatType=${flatType}&block=${block}&month=${formattedDate}&minSqm=${minSqm}&maxSqm=${maxSqm}`
        }}>
        <button onClick>Apply Filters</button>
        </Link>
    </div>
  </div>
</div>

)
}

export default FilterByParametersBar;
