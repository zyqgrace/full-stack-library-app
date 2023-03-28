import React from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePages';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import {Navbar} from './layouts/NavbarAndFooter/Navbar';

export const App = () => {
  return (
    <div>    
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>

  );
}
