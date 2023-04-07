import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBMainpage.png'
import '../css/PrivacyPolicy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DivisionNavBar from './DivisionNavBar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className = "PrivacyPolicyBackground">
            <NavBar/>

                <div className="Div__bg">
                   <h1>Privacy Policy</h1>

        
                    <div className = 'DivCard'>
                    <p>At HDBFinder ("we", "us", or "our"), your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use the Web application ("App"). By using the App, you agree to the terms of this Privacy Policy.
We may collect the following types of information from you: </p>

                    <p>a. Personal Information: When you create an account or use certain features of the App, we may collect personal information such as your name, email address, phone number, and profile picture</p>

                    <p>b. Usage Information: We automatically collect information about your usage of the App, such as the pages you view, the time and date of your visits, and your device information (e.g., device model, operating system, and unique device identifier).</p>
                    
                    <p>c. Cookies and Similar Technologies: We use cookies, web beacons, and similar technologies to collect and store information about your preferences and to track your usage of the App.</p>
                    </div>
                
                </div>
            <div class = "DivisionBackGround">
                <DivisionNavBar />
            </div>
        </div>

    )
}

export default PrivacyPolicy