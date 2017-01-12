import React from 'react';

import { Login } from 'components';

import './HomeWrapper.css';

const HomeWrapper = () => {
  return (
    <div id="bg" className="fadeIn animated ">
      <div className="container HomeWrapper">
        <Login className="login"/>
      </div>
    </div>
  );
};

export default HomeWrapper;