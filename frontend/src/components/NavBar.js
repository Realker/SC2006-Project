import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';
import '../css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser} from '@fortawesome/free-solid-svg-icons';
import '../css/FilterByParameters.css'
import APIService from './APIService';

const currentTab = ({ isActive }) => {
    return isActive
        ? "p-3 btn btn-light text-danger gap-3 d-flex align-items-center"
        : "p-3 btn btn-primary gap-3 d-flex align-items-center"
  }

  export default function NavBar() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const isAuthenticated = !!cookies.token;

    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }
    const userToken = getCookie('token');

    /* Comment this section to deactivate user authentication */
    const navigate = useNavigate();
    APIService.RetrieveUserDetails(userToken)
    .then((response) => {
      console.log(response);
      if (response.detail == "Invalid token.")
      {
        navigate('/InvalidUserSessionPage'); // Redirect to homepage
      }
    })
    .catch((error) => {
      console.log(error);
    });
    /* Till here */

    // Notification Bar
    const [isShowing, setIsShowing] = useState(false);

    const handleClick = () => {
      setIsShowing(true);
    };

    const handleClose = () => {
      setIsShowing(false);
    };

    // Logout function
    const handleLogout = () => {
      removeCookie('token', { path: '/' });
    };

    return (
      <div>
        <nav class="NavBar">
          {/* Logo */}
          <Link to="/Homepage" className="Logo">
            <p className='Logo'>HDBFinder</p>
          </Link>

          {/* Menu links */}
          <ul class="NavBarLink">
            <NavLink to="/ExploreHouses" className="NavBarLink">
              <li class="NavBarLink">Explore</li>
            </NavLink>
            <NavLink to="/FAQ" className="NavBarLink">
              <li class="NavBarLink">FAQ</li>
            </NavLink>
            <NavLink to="/MyActivities" className="NavBarLink">
              <li class="NavBarLink">My Activities</li>
            </NavLink>
          </ul>

          {/* Notification PopUp */}
          <button className="btn notification-click" onClick={handleClick}>
            <FontAwesomeIcon icon={faBell} size="2x" />
          </button>
          {isShowing && (
            <div className="notification-box">
              <p className="Bar-Notify">Notifications</p>
              <button onClick={handleClose}>X</button>
            </div>
          )}

          {/* MyAccount Bar */}
          <NavDropdown
            title={
              <span>
                <FontAwesomeIcon icon={faUser} size="1x"></FontAwesomeIcon>&nbsp;&nbsp;My
                Account
              </span>
            }
            className="dropdown-main"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className="dropdown-item" as={NavLink} to="/MyAccount">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="dropdown-item"
              as={NavLink}
              to="/ChangePassword"
            >
              Change Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-item" as={NavLink} to="/Articles">
              Articles
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-item" as={NavLink} to="/" onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </nav>
      </div>
    )
  }