import React from 'react';
import './Footer.css';

const Footer = () => {
  const getFooterCopy = (isTrue) => {
    return isTrue ? 'Holdbrton' : 'Footer Copy False';
  };

  const getFullYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='App-footer'>
      <p>{getFooterCopy(true)} - {getFullYear()}</p>
    </footer>
  );
};

export default Footer;
