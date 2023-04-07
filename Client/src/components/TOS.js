import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBMainpage.png'
import '../css/TOS.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
//import DivisionNavBar from './DivisionNavBar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TOS = () => {
    return (
        <div className = "TOSBackground">
            <NavBar/>
          
                <div className="Div__bg">
                   <h1> Terms of Service (TOS)</h1>

        
                    <div className = 'DivCard'>
                    Welcome to HDBFinder! These Terms of Service ("Terms") govern your access and use of the HDBFinder Web application ("App") provided by HDBFinder Web App. ("we", "us", or "our"). By downloading, installing, or using the Web App, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Web App. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the App, you agree to our Terms and Conditions, Privacy Policy. You may be required to create an account to access certain features of the App. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
                    </div>
                </div>
          
        </div>

    )
}

export default TOS