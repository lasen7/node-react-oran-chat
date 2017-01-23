import React, { Component } from 'react';

import io from 'socket.io-client';
const socket = io('http://52.79.152.107:3001/');

class App extends Component {

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { socket })}
      </div>
    );
  }
}

export default App;
