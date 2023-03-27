import React, {Component} from 'react';
//import NavBar from './NavBar'
//import HDB from '../images/HDBFAQ.jpg'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
//import DivisionNavBar from './DivisionNavBar'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd'; // For profile picture update
//import { Avatar } from 'antd';
//import '../css/MyAccount.css'

//Function to allow user to select photo in MyAccount Page
class ProfilePicChanger extends Component {
  constructor(props){
    super(props);
    this.state={
      visible: false,
      imagesArray: [props.pic1, props.pic2, props.pic3, props.pic4, props.pic5, props.pic6, props.pic7, props.pic8]
    };
  }
 
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
  });
};

render() {
  const imageMapper = this.state.imagesArray.map((image, index) => {
    return (
      <img src={image}
      onClick={() => this.props.handleImageChange(image)}
      height="48px"
      />
    )
  }) 

  return (
      <div className="ProfilePicChanger">
      <Button type="primary" onClick={this.showModal}>
        Open Modal
      </Button>
    <Modal
      title="Profile Picture Changer Modal"
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      {imageMapper}
      
    </Modal>{" "}
      </div>

    )
  }
}

export default ProfilePicChanger;