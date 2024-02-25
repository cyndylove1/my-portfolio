import React from 'react';
import ReactDOM from 'react-dom/client';
// import Navbar from './components/Navbar/Navbar';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <BrowserRouter>
       <App />
       {/* <Navbar/> */}

     </BrowserRouter>

  </React.StrictMode>
     
    

    
    
  
);


