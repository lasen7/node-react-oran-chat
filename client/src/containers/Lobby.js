/* global io, socket */

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { browserHistory } from 'react-router';

import * as chat from 'actions/chat';

import msgTypes from 'services/msgTypes';

import { Tab, RanChat, OpenChatList } from 'components';

class Lobby extends Component {

  async componentDidMount() {
    const {socket} = this.props;

    await this.props.ChatActions.getChannel();

    socket.on(msgTypes.ADDED_CHANNEL, data => {
      this.props.ChatActions.addedChannel(data);
    });
  }

  handleAddChannel = async (title) => {
    const {socket} = this.props;

    const result = await this.props.ChatActions.addChannel({ title });

    socket.emit(msgTypes.ADD_CHANNEL, result.value.data);

    browserHistory.push('/chat/' + result.value.data._id);
  }

  render() {
    const {params, channel} = this.props;
    const re = /ran/;
    const isRanChat = re.test(params.ran);

    return (
      <div>
        <Tab isRanChat={isRanChat} />
        {isRanChat ? <RanChat /> : <OpenChatList channel={channel} onAddChannel={this.handleAddChannel} />}
      </div>
    );
  }
}

Lobby = connect(state => {
  return {
    channel: state.chat.openChat.list
  }
}, dispatch => {
  return {
    ChatActions: bindActionCreators(chat, dispatch)
  }
})(Lobby);

export default Lobby;