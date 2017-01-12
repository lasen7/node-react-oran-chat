import React from 'react';

import './Tab.css';

const Tab = () => {
  return (
    <div>
      <ul className="nav nav-tabs nav-justified">
        <li role="presentation" className="active"><a href="#">랜덤 채팅</a></li>
        <li role="presentation"><a href="#">오픈 채팅</a></li>
      </ul>
    </div>
  );
};

export default Tab;