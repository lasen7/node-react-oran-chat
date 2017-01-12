import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <span>Talk with hspark</span>      
      <span id="exit"><i className="icon icon-logout"></i></span>
    </div>
  );
};

export default Header;