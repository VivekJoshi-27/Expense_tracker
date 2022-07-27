import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BrowserRouter>
              <Routing/>
      </BrowserRouter>
  </React.StrictMode>
);


