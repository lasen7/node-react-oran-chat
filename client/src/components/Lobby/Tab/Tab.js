import React from 'react';

import { Link } from 'react-router';

import './Tab.css';

const Tab = ({isRanChat}) => {

  return (
    <div>
      <ul className="nav nav-tabs nav-justified">
        <li role="presentation" className={isRanChat ? "active" : null}><Link to="/lobby/ran">랜덤 채팅</Link></li>
        <li role="presentation" className={isRanChat ? null : "active"}><Link to="/lobby/open">오픈 채팅</Link></li>
      </ul>
    </div>
  );
};

export default Tab;