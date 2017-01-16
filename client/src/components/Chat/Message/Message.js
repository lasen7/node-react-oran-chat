import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Message.css';

class Message extends Component {

  handleScroll = () => {
    this.div.scrollTop = this.div.scrollHeight;
  };

  componentDidUpdate(prevProps, prevState) {
    this.handleScroll();
  }

  render() {
    const {data, username} = this.props;
    const style = {
      background: '#e0e0e0'
    };

    const mapToData = data.map((data, index) => {
      return (
        <li key={index} style={username === data.username ? style : null}>
          {data.username}: {data.message}
        </li>
      );
    });

    return (
      <div className="container message" ref={ref => this.div = ref}>
        <ul className="message-list">
          {mapToData}
        </ul>
      </div >
    );
  }
};

export default Message;