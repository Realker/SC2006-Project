import React, {useState,useEffect} from "react"
//import '../css/Testt.css';
import TestBar from './TestBar'
//import "antd/dist/antd.css";
//import axios from "axios";
//import BootstrapTable from "react-bootstrap-table-next";
//import paginationFactory from "react-bootstrap-table2-paginator";
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import * as ReactBootStrap from "react-bootstrap";

function Testt() {

  return (
  
    <div class = "HomePageBackground">
    <TestBar / > 


    <button>Options V</button>
    <div className={'dropdown open'}>
      <a href="#">Option 1</a>
      <a href="#">Option 2</a>
      <a href="#">Option 3</a>
    </div>
    
  </div>

  );
}

export default Testt;


