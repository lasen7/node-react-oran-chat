import React from 'react';

import { Header, Message, Write } from 'components';

import './Wrapper.css';

const Wrapper = ({username, isRanChat, ranChat, onSendRandom, onLogout}) => {
  return (
    <div id="chatWrapper">
      <Header
        username={username}
        isRanChat={isRanChat}
        ranChat={ranChat}
        onLogout={onLogout}
        />
      <Message
        username={username}
        data={isRanChat ? ranChat.messages : null}
        />
      <Write
        count={ranChat.count}
        onSendRandom={onSendRandom}
        />
    </div>
  );
};

export default Wrapper;