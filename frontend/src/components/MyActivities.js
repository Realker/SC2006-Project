import React from 'react'
import NavBar from './NavBar'
import ExploreHousesCard from './ExploreHousesCard';
import '../css/MyActivities.css';


const MyActivities = () => {
  return (
    <div className='Myactivities__bg'>
      <NavBar/>        
      <h1>My Activites: Favourites</h1>
      <div className='Housecards'>
            <ExploreHousesCard/>
            <ExploreHousesCard/>
            <ExploreHousesCard/>
          </div>
    </div>
  )
}

export default MyActivities