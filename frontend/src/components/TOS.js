import React from 'react'
import NavBar from './NavBar'
import HDB from '../images/HDBMainpage.png'
import '../css/TOS.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DivisionNavBar from './DivisionNavBar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TOS = () => {
    return (
        <div className = "TOSBackground">
            <NavBar/>
          
                <div className="Div__bg">
                   <h1> Terms of Service (TOS)</h1>

        
                    <div className = 'DivCard'>
                    <p>1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim magna, volutpat quis suscipit non, faucibus at tortor. Pellentesque ut enim scelerisque, pulvinar velit interdum, dapibus elit. Quisque porta hendrerit mi, non aliquet sapien tincidunt sed. Sed vel eros a eros consequat venenatis a maximus massa. Donec mauris sapien, sodales ac lacus nec, dignissim ullamcorper orci. Vivamus eleifend pellentesque magna, ac tincidunt nibh tristique id. Sed finibus eleifend neque, ac elementum quam posuere non. Aliquam vitae condimentum ante, at egestas lorem.</p>

                    <p>2) Proin enim urna, laoreet nec laoreet lacinia, pretium vel orci. Vestibulum at pharetra neque. Mauris lacinia ante id tortor porttitor, vel condimentum dolor fringilla. Pellentesque vulputate pulvinar gravida. Nullam sodales mollis tellus. Mauris massa augue, ultrices a ante eget, efficitur cursus ipsum. Suspendisse potenti.</p>
                
                    <p>3) Sed ornare, libero vitae vulputate aliquam, arcu sem porta turpis, in convallis lacus nisl ut nibh. Nulla non ex ultrices, malesuada odio vitae, sollicitudin velit. Phasellus varius velit turpis, ac ullamcorper dolor feugiat at. Phasellus nec varius nulla. Quisque eu venenatis libero. Maecenas non odio vel ex fermentum tincidunt ultrices sed velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>

                    <p>4) Nam nec nunc vulputate, molestie arcu non, dictum dui. Aenean faucibus neque vitae dapibus ultrices. Sed varius blandit tortor, nec sagittis velit auctor at. Praesent id ex tincidunt augue ornare facilisis pretium eu purus. Pellentesque vitae libero eros. Fusce quis sem in risus tincidunt sollicitudin. Nullam lacinia tempus accumsan. Nam luctus dui quis risus semper bibendum. Phasellus vel faucibus ligula. Integer non vehicula ipsum. Maecenas eget lacinia lorem. Fusce nisi odio, sollicitudin a mauris quis, tristique bibendum purus. Nunc sagittis sed nunc eget consequat. Etiam ornare justo in porttitor ultricies. Vivamus at blandit sem. Donec scelerisque pulvinar urna, ut rutrum est consectetur quis.</p>
                    
                    <p>5) Morbi viverra odio vitae mauris dictum tristique. Aliquam nibh enim, pharetra eget luctus et, laoreet ac justo. Sed fermentum lorem purus, at varius mauris pharetra non. Vivamus tincidunt ut justo aliquam placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum libero a nisl imperdiet mollis. Sed eget fermentum tellus. Suspendisse potenti. Vivamus a est leo. Donec at turpis et lorem mollis feugiat. Praesent in eros porttitor, fringilla nunc eu, efficitur urna. Donec consectetur purus ut ullamcorper rutrum. Sed eget mi mauris. Vestibulum congue nulla sit amet massa faucibus gravida eget at leo. Fusce eu sollicitudin nisi. Nulla scelerisque erat quis eleifend congue.</p>
                    </div>
                </div>
            <div class = "DivisionBackGround">
                <DivisionNavBar />
            </div>
        </div>

    )
}

export default TOS