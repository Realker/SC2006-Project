import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom'
import '../css/DisplayFlat.css';

/*
function Flat() {
    return (
      <div>
        <h1>Flat Title</h1>
        <p>Flat content goes here.</p>
        <p>Address: </p>
        <p>Postal Code: </p>
        <p>123</p>
     
      </div>
    );
  }
*/

function Flat(props) {
  return (props.trigger) ? (
    <div className="flat">
      <div className="flat-inner">
        <button className="close-flat" onClick={() => props.setTrigger(false)}
        >close</button>
        { props.children }
      </div>
    </div>
  ) : "";
}

  export default Flat;