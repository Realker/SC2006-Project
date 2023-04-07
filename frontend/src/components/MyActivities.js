import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NavBar from './NavBar'
import MyActivitiesCard from './MyActivitiesCard';
import APIService from './APIService'
import '../css/MyActivities.css';
import DivisionNavBar from './DivisionNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const MyActivities = () => {

  const [responseLength, setResponseLength] = useState(0);
  const [listOfFav, setListOfFav] = useState([]);

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

  useEffect(() => {
    APIService.RetrieveUserFavourite(userToken)
      .then((response) => {
        setResponseLength(response.length);
        setListOfFav(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <><div className='Myactivities__bg'>
      <NavBar/>

      

      <h1>My Activites: Favourites</h1>
      <div className='Housecards'>
            {
              // Generate ExploreHousesCard components dynamically using a for loop
              (() => {
                const cards = [];
                for (let i = 1; i <= responseLength; i++) {
                  cards.push(<MyActivitiesCard id_hdb={listOfFav[i-1].id_str_hdb} id_true={listOfFav[0].id} true_settings={true} detailsTrue={true}/>);
                }
                return cards;
              })()
            }
          </div>
      

    </div>
    
   

</>


  )

}

export default MyActivities