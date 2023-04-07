import React, { useState } from 'react'
import '../css/SaveHousesToFavourites.css';
import APIService from './APIService'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SaveHousesToFavourites = () => {
  const location = useLocation();
  const id_str = new URLSearchParams(location.search).get('id_str') || "";
  const [email, setEmail] = useState('');

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

  const confirmAdd = () => {
    APIService.AddUserFavourite(userToken, id_str, email)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }


  return (
    <div className='SaveHousesToFavourites__bg'>
      <div className='SaveHousesToFavourites__content'>
        <h1>Confirm Save House to Favourites?</h1>
        <div className='SaveHousesToFavourites__buttons'>
            <button className='btn-cancel' onClick={() => window.history.back()}>Cancel</button>
            <NavLink to="/MyActivities" className="">
            <button className='btn-confirm'
                    onClick={confirmAdd}>
              Confirm
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SaveHousesToFavourites