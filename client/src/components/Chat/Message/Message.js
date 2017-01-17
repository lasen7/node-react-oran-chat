import React, { Component } from 'react';

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

    const mapToData = data.map((item, index) => {
      return (
        <li key={index} style={username === item.username ? style : null}>
          {item.username ? `${item.username}: ${item.message}` : item.message}
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