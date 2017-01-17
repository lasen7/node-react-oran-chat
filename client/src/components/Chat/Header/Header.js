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
      <a href="/lobby/ran" className="header-home" onClick={() => { onLogout(false) } }>
        <i className="icon icon-home"></i>
      </a>
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