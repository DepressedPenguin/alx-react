// Header.js
import React from 'react';
import logoHol from '../logo_hol.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className='App-header'>
      <img src={logoHol} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

export default Header;

