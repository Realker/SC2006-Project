import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import Homepage from './components/Homepage';
import ExploreHouses from './components/ExploreHouses';
import FAQ from './components/FAQ'
import MyActivities from './components/MyActivities'
import MyAccount from './components/MyAccount'
import SaveHousesToFavourites from './components/SaveHousesToFavourites';
import ResetPassword from './components/ResetPassword';
import DisplayFlat from './components/DisplayFlat';
import Flat from './components/Flat';
import Search from './components/Search';
//import FilterByParameters from './components/FilterByParameters';
import SearchHouses from './components/SearchHouses';
import TNC from './components/TNC';
import TNCWriteup from './components/TNCWriteup';
import Testt from './components/Testt';
import Testing from './components/Testing';

import FilterByParameters from './components/FilterByParameters';
import ProfilePicChanger from './components/ProfilePicChanger';
import ChangePassword from './components/ChangePassword';

function Router(){
  return(
    
<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginRegister />} />
      <Route exact path= "/Homepage" element ={ <Homepage />}/>
      <Route exact path="/test" element={<App />} />
      <Route path='/ExploreHouses' element ={<ExploreHouses/>}/>
      <Route path='/FAQ' element ={<FAQ/>}/>
      <Route path='/MyActivities' element = {<MyActivities/>} />
      <Route path='/MyAccount' element = {<MyAccount/>} />
      <Route path='/SaveHousesToFavourites' element = {<SaveHousesToFavourites/>} />
      <Route path='/ResetPassword' element = {<ResetPassword/>} />
      <Route path='/DisplayFlat' element = {<DisplayFlat/>} />
      <Route path='/Flat' element = {<Flat/>} />
      <Route path='/Search' element = {<Search/>} />
      <Route path='/SearchHouses' element = {<SearchHouses />}/>
      <Route path='/TNC' element = {<TNC />}/>
      <Route path='/TNCWriteup' element = {<TNCWriteup />} />
      <Route path='/FilterByParameters' element = {<FilterByParameters />} />
      <Route path='/Testt' element = {<Testt />} />
      <Route path='/Testing' element = {<Testing />} />
      <Route path='/ProfilePicChanger' element = {<ProfilePicChanger />} />
      <Route path='/ChangePassword' element = {<ChangePassword />}/>

    </Routes>
</BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
