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
      imagesArray: [props.pic1, props.pic2, props.pic3, props.pic4, props.pic5, props.pic6, props.pic7, props.pic8,
        props.pic9, props.pic10, props.pic11, props.pic12, props.pic13, props.pic14, props.pic15, props.pic16,
        props.pic17, props.pic18, props.pic19, props.pic20]
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
        Choose Profile Picture
      </Button>
    <Modal
      title="Profile Picture Avatars"
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