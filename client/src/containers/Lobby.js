import React, { Component } from 'react';

import { Tab, RanChat, OpenChatList } from 'components';

class Lobby extends Component {
  render() {
    return (
      <div>
        <Tab />
        <OpenChatList />
      </div>
    );
  }
}

export default Lobby;