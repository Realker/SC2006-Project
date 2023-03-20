import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import LoginRegister from './components/LoginRegister';
//import RegisterPage from './pages/RegisterPage';
import Homepage from './components/Homepage';

import './css/App.css';


const App = () => {
  return (
    <div className="App">
    
        <BrowserRouter>
          {/* TODO: add router guards based on user authentication */}
          <Routes>
            <Route path='/' element={<LoginRegister />} />
            <Route path='/' element={<Homepage />} />
           
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}
export default App;