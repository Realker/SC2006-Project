import React, { useState } from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom'
import '../css/TNC.css';

function TNC(props) {
  return (props.trigger) ? (
    <div className="tnc">
        <div className="tnc-inner">
            <button className="close-tnc" onClick={() => props.setTrigger(false)}
            >close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default TNC