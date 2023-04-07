import React, { useState } from 'react'
import '../css/InvalidUserSessionPage.css';
import APIService from './APIService'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const InvalidUserSessionPage = () => {

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

        const navigate = useNavigate();
        APIService.RetrieveUserDetails(userToken)
        .then((response) => {
        console.log(response);
        if (response.email)
        {
            navigate('/Homepage'); // Redirect to homepage
        }
        })
        .catch((error) => {
        console.log(error);
        });

  return (
    <div className='SaveHousesToFavourites__bg'>
      <div className='SaveHousesToFavourites__content'>
        <h1>User session is Invalid</h1>
        <div className='SaveHousesToFavourites__buttons'>
            <NavLink to="/" className="">
            <button className='btn-confirm'>
              Return to Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default InvalidUserSessionPage