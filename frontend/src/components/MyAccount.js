import React, { useState, Component} from 'react';
import NavBar from './NavBar'
import HDB from '../images/HDBFAQ.jpg'
import '../css/MyAccount.css';
import 'antd/dist/antd.css';
import { Avatar }  from 'antd';
import ProfilePicChanger from './ProfilePicChanger';
import Pic1 from './pics/avatar1.png'; import Pic2 from './pics/avatar2.png';
import Pic3 from './pics/avatar3.png'; import Pic4 from './pics/avatar4.png';
import Pic5 from './pics/avatar5.png'; import Pic6 from './pics/avatar6.png';
import Pic7 from './pics/avatar7.png'; import Pic8 from './pics/avatar8.png';
import Pic9 from './pics/avatar9.png'; import Pic10 from './pics/avatar10.png';
import Pic11 from './pics/avatar11.png'; import Pic12 from './pics/avatar12.png';
import Pic13 from './pics/avatar13.png'; import Pic14 from './pics/avatar14.png';
import Pic15 from './pics/avatar15.png'; import Pic16 from './pics/avatar16.png';
import Pic17 from './pics/avatar17.png'; import Pic18 from './pics/avatar18.png';
import Pic19 from './pics/avatar19.png'; import Pic20 from './pics/avatar20.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
//import DivisionNavBar from './DivisionNavBar';


class MyAccount extends Component {

  //Profile Picture Changer Function
  constructor(props){
    super(props);
    this.state={
      profileImage: ''
    }
  }

handleImageChange = (profileImage) => {
  this.setState({
    profileImage
  })
}
  render(){
    return (
      <div className="MyAccountBackground">
        <NavBar/>

      {/* These code are for Home Icon > My Account */}
      <div className="second-nav">
        <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;My Account
      </div>

      <div className='MyAccount__bg'>
      <h1>My Personal Profile</h1>

      {/* Allows user to choose profile picture */}
      <Avatar size={150} icon="user" className="avatar-pop-up" src={this.state.profileImage}></Avatar> 
      <ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1} pic2={Pic2} pic3={Pic3}
      pic4={Pic4} pic5={Pic5} pic6={Pic6} pic7={Pic7} pic8={Pic8} pic9={Pic9} pic10={Pic10}
      pic11={Pic11} pic12={Pic12} pic13={Pic13} pic114={Pic14} pic15={Pic15} pic16={Pic16}
      pic17={Pic17} pic18={Pic18} pic19={Pic19} pic20={Pic20}/>

      <h2>
      <button id="cancelProfile" className="profileCancel" 
      //value={profilecancel} onChange={handleCancelProfile}
            >Cancel</button> 

      <button id="saveProfile" className="profileSave" 
      //value={profilesave} onChange={handleSaveProfile}
            >Save</button> 
      </h2>

      <div className = 'MyAccountCard'>

        <h3 class = 'uName'>Username: <br></br>
        <input
              type="text" className="displayName" placeholder="Your Username"  
              //value={email}
              //onChange={(e) => displayName(e.target.value)}
        /></h3>

        <h3 class = 'uEmail'>Email address: <br></br>
        <input
              type="email" className="displayEmail" placeholder="Your Email"  
              //value={email}
              //onChange={(e) => displayName(e.target.value)}
        /></h3> 
        
        <h3 class = 'shortBio'>Short Bio <br></br>
        <textarea rows="8" cols="50" className="displayBio" placeholder="Add a short bio..."
              //value={email}
              //onChange={(e) => displayName(e.target.value)}
        ></textarea></h3> 

      <h2>
      <button className="saveEdit"
          //onClick={() => saveEdit(true)}
            >Save</button> &nbsp;
      <button className="cancelEdit"
          //onClick={() => cancelEdit(true)}
            >Cancel</button> 
      </h2>         
          </div>
        </div>  
      </div>
    );
  }
}

export default MyAccount;