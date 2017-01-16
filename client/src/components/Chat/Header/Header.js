import React from 'react';

import { Link } from 'react-router';

import './Header.css';

const Header = ({username, isRanChat, ranChat, onLogout}) => {
  let text = '';

  if (isRanChat && ranChat.count === 1) {
    text = '기다리는 중...';
  } else if (isRanChat && ranChat.count === 2) {
    let name = '';
    if (ranChat.user1 === username) {
      name = ranChat.user2;
    } else {
      name = ranChat.user1;
    }

    text = name + '님과 대화중';
  }

  return (
    <div className="header">
      <Link to="/lobby/ran" className="header-home">
        <i className="icon icon-home"></i>
      </Link>
      <span>{text}</span>
      <span id="exit">
        <i
          className="icon icon-arrows-cw"
          onClick={onLogout}></i>
      </span>
    </div>
  );
};

export default Header;