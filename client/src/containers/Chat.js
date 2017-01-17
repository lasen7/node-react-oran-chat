import React, { Component } from 'react';

import { Wrapper } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { browserHistory } from 'react-router';

import io from 'socket.io-client';
import msgTypes from 'services/msgTypes';

import * as user from 'actions/user';
import * as chat from 'actions/chat';

import storage from 'utils/storage';

// automatically connect
const socket = io('http://localhost:3000');

class Chat extends Component {

  isRanChatPath = () => {
    const {params} = this.props;
    const re = /ran/;
    return re.test(params.ran);
  }

  componentDidMount() {
    // check username
    const isRanChat = this.isRanChatPath();

    const savedUsername = storage.get('username');

    const username = this.props.UserActions.getUser(savedUsername).payload;

    if (!username) {
      browserHistory.push('/');
      return;
    }

    if (isRanChat) {
      // join room
      socket.emit(msgTypes.JOIN_RANDOM, { username });

      // listening socket event
      socket.on(msgTypes.JOINED_RANDOM, data => {
        this.props.ChatActions.joinedRandom(data);
      });

      socket.on(msgTypes.RECEIVE_RANDOM, data => {
        this.props.ChatActions.receivedRandom(data);
      });

      socket.on(msgTypes.LEAVED_RANDOM, data => {
        this.props.ChatActions.leavedRandom(data);
      });
    }
  }

  handleSendRandom = (message) => {
    const roomId = this.props.ranChat.roomId;
    const username = this.props.username;

    socket.emit(msgTypes.SEND_RANDOM, {
      roomId,
      username,
      message
    });
  }

  handleLogout = (isRejoin = true) => {
    const roomId = this.props.ranChat.roomId;
    const username = this.props.username;

    socket.emit(msgTypes.LEAVE_RANDOM, {
      roomId,
      username
    });

    // remove chat message and username
    this.props.ChatActions.cleanRandom();

    if (isRejoin) {
      socket.emit(msgTypes.JOIN_RANDOM, { username });
    }
  }

  render() {
    const isRanChat = this.isRanChatPath();

    return (
      <Wrapper
        username={this.props.username}
        isRanChat={isRanChat}
        ranChat={this.props.ranChat}
        socket={socket}
        onSendRandom={this.handleSendRandom}
        onLogout={this.handleLogout}
        />
    );
  }
}

Chat = connect(state => {
  return {
    username: state.user.username,
    ranChat: state.chat.ranChat
  }
}, dispatch => {
  return {
    UserActions: bindActionCreators(user, dispatch),
    ChatActions: bindActionCreators(chat, dispatch)
  }
})(Chat);

export default Chat;