import React, {Component} from 'react';
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
      <Avatar size={200} icon="user" className="avatar-pop-up" src={this.state.profileImage}></Avatar> 
      <ProfilePicChanger handleImageChange={this.handleImageChange} pic1={Pic1} pic2={Pic2} pic3={Pic3}
      pic4={Pic4} pic5={Pic5} pic6={Pic6} pic7={Pic7} pic8={Pic8}/>

      <h2>
      <button className="profileCancel"
          //onClick={() => setLogin(true)}
            >Cancel</button> 
      <button className="profileSave"
          //onClick={() => setLogin(true)}
            >Save</button> 
      </h2>

      <div className = 'MyAccountCard'>

        
        <h3 class = 'uName'>Username:</h3>
        <h3 class = 'uEmail'>Email address:</h3> <h3 class = 'ShortBio'>Short Bio</h3>
        <h3 class = 'uPhoto'>Update Photo</h3>
      </div>
       
  `</div>  

      </div>
    );
  }
}

export default MyAccount;