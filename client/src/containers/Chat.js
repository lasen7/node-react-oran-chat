import React, { Component } from 'react';

import { Wrapper } from 'components';

import io from 'socket.io-client';
import msgTypes from 'services/msgTypes';

// automatically connect
const socket = io('http://localhost:3000');

class Chat extends Component {
  state = {
    isRanChat: false
  };

  isRanChatPath = () => {
    const {params} = this.props;
    const re = /ran/;
    return re.test(params.ran);
  }

  componentDidMount() {
    const isRanChat = this.isRanChatPath();

    //socket.emit(msgTypes.JOIN_RANDOM, { username: });
  }

  render() {
    const isRanChat = this.isRanChatPath();

    return (
      <Wrapper isRanChat={isRanChat} socket={socket} />
    );
  }
}

export default Chat;