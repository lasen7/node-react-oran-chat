import React, { Component } from 'react';

import { Wrapper } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { browserHistory } from 'react-router';

import msgTypes from 'services/msgTypes';

import * as user from 'actions/user';
import * as chat from 'actions/chat';

import storage from 'utils/storage';

class Chat extends Component {

  isRanChatPath = () => {
    const {params} = this.props;
    const re = /ran/;
    return re.test(params.ran);
  }

  backEvent = (e) => {
    e.preventDefault();

    this.handleLogout(false);

    location.reload(false);
  }

  async componentDidMount() {
    const {socket} = this.props;

    // check username
    const isRanChat = this.isRanChatPath();

    const savedUsername = storage.get('username');

    const username = this.props.UserActions.getUser(savedUsername).payload;

    if (!username) {
      browserHistory.push('/');
      return;
    }

    window.onpopstate = this.backEvent;

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
    } else {
      const {params} = this.props;
      const roomId = params.ran;

      await this.props.ChatActions.getChannelInfo({ roomId });

      socket.emit(msgTypes.JOIN_OPEN, {
        username,
        roomId
      })

      socket.on(msgTypes.JOINED_OPEN, data => {
        this.props.ChatActions.joinedOpen(data);
      });

      socket.on(msgTypes.RECEIVE_OPEN, data => {
        this.props.ChatActions.receivedOpen(data);
      });

      socket.on(msgTypes.LEAVED_OPEN, data => {
        console.log('LEAVED_OPEN: ', data);

        this.props.ChatActions.leavedOpen(data);
      })
    }
  }

  handleSendMessage = (message) => {
    const {socket} = this.props;
    const isRanChat = this.isRanChatPath();
    const username = this.props.username;

    const roomId = isRanChat ? this.props.ranChat.roomId : this.props.openChat.roomId;

    let _msgTypes = isRanChat ? msgTypes.SEND_RANDOM : msgTypes.SEND_OPEN;

    socket.emit(_msgTypes, {
      roomId,
      username,
      message
    });
  }

  handleLogout = (isRejoin = true) => {
    const {socket} = this.props;
    const isRanChat = this.isRanChatPath();
    const username = this.props.username;
    const roomId = isRanChat ? this.props.ranChat.roomId : this.props.openChat.roomId;

    let _msgTypes = isRanChat ? msgTypes.LEAVE_RANDOM : msgTypes.LEAVE_OPEN;

    socket.emit(_msgTypes, {
      roomId,
      username
    });

    // remove chat message and username
    if (isRanChat) {
      this.props.ChatActions.cleanRandom();
    }

    if (isRejoin) {
      // only ran chat
      socket.emit(msgTypes.JOIN_RANDOM, { username });
    }
  }

  render() {
    const {socket} = this.props;
    const isRanChat = this.isRanChatPath();

    return (
      <Wrapper
        username={this.props.username}
        isRanChat={isRanChat}
        ranChat={this.props.ranChat}
        openChat={this.props.openChat}
        socket={socket}
        onSendMessage={this.handleSendMessage}
        onLogout={this.handleLogout}
        />
    );
  }
}

Chat = connect(state => {
  return {
    username: state.user.username,
    ranChat: state.chat.ranChat,
    openChat: state.chat.channel
  }
}, dispatch => {
  return {
    UserActions: bindActionCreators(user, dispatch),
    ChatActions: bindActionCreators(chat, dispatch)
  }
})(Chat);

export default Chat;