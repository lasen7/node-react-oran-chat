import React from 'react';

import { Header, Message, Write } from 'components';

import './Wrapper.css';

const Wrapper = ({username, isRanChat, openChat, ranChat, onSendMessage, onLogout}) => {
  return (
    <div id="chatWrapper">
      <Header
        username={username}
        isRanChat={isRanChat}
        ranChat={ranChat}
        openChat={openChat}
        onLogout={onLogout}
        />
      <Message
        username={username}
        data={isRanChat ? ranChat.messages : openChat.messages}
        />
      <Write
        count={isRanChat ? ranChat.count : 2}
        onSendMessage={onSendMessage}
        />
    </div>
  );
};

export default Wrapper;