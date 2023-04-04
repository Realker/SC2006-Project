import React, { useState, Component} from 'react';
import NavBar from './NavBar'
import APIService from './APIService'
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
import DivisionNavBar from './DivisionNavBar';



const MyAccount = () => {
  const [changed, setChanged] = useState(false);

  const [profileImage, setProfileImage] = useState('');

  const handleImageChange = (profileImage) => {
    setProfileImage(profileImage);
  };

  const [oldName, setOldName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [oldEmail, setOldEmail] = useState('');

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
    setOldName(response.name);
    setOldEmail(response.email);
  })
  .catch((error) => {
    console.log(error);
  });

  const [newName, setNewName] = useState(oldName);
  const [newPassword, setNewPassword] = useState(oldPassword);
  const [newEmail, setNewEmail] = useState(oldEmail);

  const confirmChange = () => {
    APIService.UpdateUserDetails(userToken, newName, newEmail)
      .then((response) => {
        console.log(response);
        if (newName == response.name)
        {
          setChanged(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });

      APIService.RetrieveUserDetails(userToken)
    .then((response) => {
      setOldName(response.name);
      setOldEmail(response.email);
      console.log(response.email);
      console.log(response.name);
    })
    .catch((error) => {
      console.log(error);
    });
    }

  return (
      <div className="MyAccountBackground">
        <NavBar/>



      <div className='MyAccount__bg'>
      <h1>My Personal Profile</h1>

      {/* Allows user to choose profile picture */}
      <Avatar size={150} icon="user" className="avatar-pop-up" src={profileImage}></Avatar>
      <ProfilePicChanger handleImageChange={handleImageChange} pic1={Pic1} pic2={Pic2} pic3={Pic3}
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
      <table style={{ borderCollapse: 'collapse', border: 'none' }}>
        <tbody>
          <tr style={{ borderBottom: 'none' }}>
            <td style={{ border: 'none', paddingRight: '20px', textAlign: 'left' }}>
              Current Username    :
            </td>
            <td style={{ border: 'none', textAlign: 'right' }}>
              {oldName}
            </td>
          </tr>
          <tr style={{ borderBottom: 'none' }}>
            <td style={{ border: 'none', paddingRight: '20px', textAlign: 'left' }}>
              Current Email   :
            </td>
            <td style={{ border: 'none', textAlign: 'right' }}>
              {oldEmail}
            </td>
          </tr>
        </tbody>
      </table>
        <h3 class = 'uName'>New Username: <br></br>
        <input
              type="text" className="displayName" placeholder="Your Username"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
        /></h3>

        <h3 class = 'uEmail'>New Email: <br></br>
        <input
              type="email" className="displayEmail" placeholder="Your Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
        /></h3>

        {/* <h3 class = 'shortBio'>Short Bio <br></br>
        <textarea rows="8" cols="50" className="displayBio" placeholder="Add a short bio..."
              //value={email}
              //onChange={(e) => displayName(e.target.value)}
        ></textarea></h3> */}

      <h2>
      <button className="cancelEdit"
          onClick={() => (setNewEmail(""), setNewName(""), setChanged(false))}
            >Cancel</button> &nbsp;
      <button className="saveEdit"
          onClick={() => confirmChange()}
            >Save</button>
      </h2>

      <div className = "changedMessage">
        {changed ?
          (
            <div>
              User details successfully changed.
            </div>
          )
          :
          (
            <div>

            </div>
          )}
      </div>

          </div>
        </div>
      </div>
  );
};

export default MyAccount;