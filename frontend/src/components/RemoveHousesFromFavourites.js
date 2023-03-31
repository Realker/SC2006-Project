import React from 'react'
import '../css/SaveHousesToFavourites.css';
import { NavLink } from 'react-router-dom';

const RemoveHousesFromFavourites = () => {
  return (
    <div className='SaveHousesToFavourites__bg'>
      <div className='SaveHousesToFavourites__content'>
        <h1>Confirm Remove House from Favourites?</h1>
        <div className='SaveHousesToFavourites__buttons'>
            <NavLink to="/MyActivities" className="">
                <button className='btn-cancel'>Cancel</button>
            </NavLink>
            <NavLink to="/MyActivities" className="">
            <button className='btn-confirm'>Confirm</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default RemoveHousesFromFavourites