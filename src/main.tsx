import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import Navbar from './components/Navbar/Navbar';
import Sign from './components/Sign/Sign';
import Create from './create';
import './indeex.scss'

// import './index.css'

const root= ReactDOM.createRoot(document.getElementById('root')as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar></Navbar>
     <App/>
     <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
);

