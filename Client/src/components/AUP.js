import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBMainpage.png'
import '../css/AUP.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DivisionNavBar from './DivisionNavBar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AUP = () => {
    return (
        <div className = "AUPBackground">
            <NavBar/>
         
                <div className="Div__bg">
                   <h1> Acceptable Use Policy (AUP)</h1>

        
                    <div className = 'DivCard'>
                    <p>The purpose of this policy is to outline the acceptable use of computer equipment at HDBFinder. These rules are in place to protect the authorized user and HDBFinder. Inappropriate use exposes HDBFinder to risks including virus attacks, compromise of network systems and services, and legal issues.</p>
                    </div>
                
                </div>
            <div class = "DivisionBackGround">
                <DivisionNavBar />
            </div>
        </div>

    )
}

export default AUP