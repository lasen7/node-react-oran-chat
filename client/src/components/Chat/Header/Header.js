import React from 'react';

import { Link } from 'react-router';

import './Header.css';

const Header = ({username, isRanChat, ranChat, onLogout}) => {
  let text = '';
  let name = '';

  if (isRanChat) {
    if (ranChat.count <= 1 && ranChat.user1 && ranChat.user2) {
      name = username === ranChat.user1 ? ranChat.user2 : ranChat.user1;
      text = name + '님이 나가셨습니다';
    } else if (ranChat.count <= 1) {
      text = '기다리는 중...';
    } else {
      name = username === ranChat.user1 ? ranChat.user2 : ranChat.user1;
      text = name + '님과 대화중';
    }
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