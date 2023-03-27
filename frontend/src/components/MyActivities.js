import React from 'react'
import NavBar from './NavBar'
import ExploreHousesCard from './ExploreHousesCard';
import '../css/MyActivities.css';
import DivisionNavBar from './DivisionNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const MyActivities = () => {
  return (
    <><div className='Myactivities__bg'>
      <NavBar/>        

      <div className="second-nav">
        <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;My Activities
      </div>

      <h1>My Activites: Favourites</h1>
      <div className='Housecards'>
            <ExploreHousesCard/>
            <ExploreHousesCard/>
            <ExploreHousesCard/>
          </div>
          
        
    </div>
    <div className= "DivisionBackGround">
    <DivisionNavBar />
  
    </div>     

    
</>
    
    
  )
  
}

export default MyActivities