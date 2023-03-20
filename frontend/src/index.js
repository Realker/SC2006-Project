import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import Homepage from './components/Homepage';

function Router(){
  return(
<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginRegister />} />
      <Route exact path= "/" element ={ <Homepage />}/>
      <Route exact path="/test" element={<App />} />
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
