import React from 'react';

import './Header.css';

const Header = ({username, isRanChat, ranChat, openChat, onLogout}) => {
  let text = '';
  let name = '';

  if (isRanChat) {
    // ran chat
    if (ranChat.count <= 1 && ranChat.user1 && ranChat.user2) {
      name = username === ranChat.user1 ? ranChat.user2 : ranChat.user1;
      text = name + '님이 나가셨습니다';
    } else if (ranChat.count <= 1) {
      text = '기다리는 중...';
    } else {
      name = username === ranChat.user1 ? ranChat.user2 : ranChat.user1;
      text = name + '님과 대화중';
    }
  } else {
    // open chat
    text = openChat.title;
  }

  const exitButton = (
    <span id="exit">
      <i
        className="icon icon-arrows-cw"
        onClick={onLogout}></i>
    </span>
  );

  return (
    <div className="header">
      <a href={`/lobby/${isRanChat ? 'ran' : 'open'}`} className="header-home" onClick={() => { onLogout(false) } }>
        < i className="icon icon-home"></i>
      </a>
      <span>{text}</span>
      {isRanChat ? exitButton : null}
    </div >
  );
};

export default Header;