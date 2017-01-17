import React, { Component } from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:3000');

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
