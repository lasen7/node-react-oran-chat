import React from 'react';

import { Login } from 'components';

import './HomeWrapper.css';

const HomeWrapper = ({username, onRegister}) => {
  return (
    <div id="bg" className="fadeIn animated ">
      <div className="container HomeWrapper">
        <Login
          className="login"
          username={username}
          onRegister={onRegister} />
      </div>
    </div>
  );
};

export default HomeWrapper;