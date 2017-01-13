import React, { Component } from 'react';

import { Tab, RanChat, OpenChatList } from 'components';

class Lobby extends Component {
  render() {
    const {params} = this.props;
    const re = /ran/;
    const isRanChat = re.test(params.ran);

    return (
      <div>
        <Tab isRanChat={isRanChat} />
        {isRanChat ? <RanChat /> : <OpenChatList />}
      </div>
    );
  }
}

export default Lobby;