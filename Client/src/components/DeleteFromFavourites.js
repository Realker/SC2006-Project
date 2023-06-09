import React, { useState } from 'react'
import '../css/SaveHousesToFavourites.css';
import APIService from './APIService'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const DeleteFromFavourites = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const id_true = new URLSearchParams(location.search).get('id_true') || "";

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

  APIService.RetrieveUserDetails(userToken)
  .then((response) => {
    setEmail(response.email);
  })
  .catch((error) => {
    console.log(error);
  });

  const confirmDelete = () => {
    APIService.DeleteUserFavourite(userToken, id_true)
    .then((response) => {
      console.log("Resource deleted successfully:", response);
    })
    .catch((error) => {
      console.error("Error deleting the resource:", error);
    });
    }

  return (
    <div className='SaveHousesToFavourites__bg'>
      <div className='SaveHousesToFavourites__content'>
        <h1>Confirm Delete House from Favourites?</h1>
        <div className='SaveHousesToFavourites__buttons'>
            <NavLink to="/ExploreHouses" className="">
                <button className='btn-cancel'>Cancel</button>
            </NavLink>
            <NavLink to="/MyActivities" className="">
            <button className='btn-confirm'
                    onClick={confirmDelete}>
              Confirm
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default DeleteFromFavourites;