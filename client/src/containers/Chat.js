import React, { Component } from 'react';

import { Header, Message, Write } from 'components';
import { Wrapper } from 'components';

class Chat extends Component {
  render() {
    return (
      <div id="chat" style={{ height: '100%' }}>
        <Header />
        <Message />
        <Write />
      </div>
    );
  }
}

// <Wrapper />

// <Header />
// <Message />
// <Write />

export default Chat;