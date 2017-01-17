import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as chat from 'actions/chat';

import { Tab, RanChat, OpenChatList } from 'components';

class Lobby extends Component {

  async componentDidMount() {
    await this.props.ChatActions.getOpenList();
  }

  handleAddOpenList = async (title) => {
    await this.props.ChatActions.addOpenList({ title });
  }

  render() {
    const {params, channel} = this.props;
    const re = /ran/;
    const isRanChat = re.test(params.ran);

    return (
      <div>
        <Tab isRanChat={isRanChat} />
        {isRanChat ? <RanChat /> : <OpenChatList channel={channel} onAddEvent={this.handleAddOpenList} />}
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