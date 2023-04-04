import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBMainpage.png'
import '../css/AUP.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DivisionNavBar from './DivisionNavBar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AUP = () => {
    return (
        <div className = "AUPBackground">
            <NavBar/>
         
                <div className="Div__bg">
                   <h1> Acceptable Use Policy (AUP)</h1>

        
                    <div className = 'DivCard'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus vel mi ullamcorper rhoncus quis at elit. Maecenas pellentesque erat non metus mollis, eget eleifend enim dapibus. Proin molestie elit id leo vulputate aliquam. Vivamus eget viverra metus. Morbi id turpis quis ipsum pellentesque vestibulum. Sed nec leo eu lectus placerat luctus sit amet et nulla. Duis facilisis elit vel mollis eleifend. Nunc vel justo dui. Fusce et tristique ante. Vivamus porttitor porttitor enim pretium posuere. Sed purus justo, porta non massa et, laoreet fermentum erat.</p>

                    <p>Morbi tempus a massa quis varius. Maecenas sed arcu ultricies, tempor diam vitae, dictum leo. Donec quis sem ex. Curabitur eget nisi sagittis, tempor tellus at, laoreet magna. Vestibulum ultrices a erat et iaculis. In orci urna, accumsan vel ipsum eget, congue mattis magna. Suspendisse tempus dignissim luctus. Nam auctor nisi sit amet erat fringilla, id imperdiet est efficitur. Mauris convallis quam nec ipsum ultricies, tristique accumsan eros semper. Curabitur eget venenatis nisi. Fusce luctus ante vel ante rutrum, blandit suscipit urna elementum. Quisque id tellus tincidunt, luctus lorem ac, elementum orci. Sed eu rhoncus neque. Quisque elementum elit id euismod rutrum. Suspendisse vitae ex lacinia, sagittis dolor eu, vestibulum sapien. Ut sit amet mauris felis.</p>

                    <p>Vivamus mauris odio, tempus vitae velit pretium, rhoncus vulputate sapien. Integer vel lacus lacinia, ullamcorper massa a, fringilla est. Praesent rutrum, leo in efficitur auctor, est urna euismod quam, et blandit magna felis at ante. Morbi cursus magna luctus, posuere felis vel, condimentum neque. Curabitur a ligula tincidunt, lacinia dolor id, auctor velit. Sed gravida, sem lacinia elementum pulvinar, elit turpis dignissim nisl, a viverra sapien leo eget odio. Phasellus feugiat malesuada libero nec gravida. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                
                </div>
            <div class = "DivisionBackGround">
                <DivisionNavBar />
            </div>
        </div>

    )
}

export default AUP