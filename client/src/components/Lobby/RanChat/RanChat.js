import React from 'react';

import { browserHistory } from 'react-router';

import './RanChat.css';

const RanChat = () => {
  const handleStart = () => {
    browserHistory.push('/chat/ran');
  };

  return (
    <div className="container text-center ranChat">
      <h2 id="ranChat-header">랜덤 채팅을 해보세요!</h2>
      <button
        className="form-control btn btn-default"
        onClick={handleStart}>시작하기</button>
    </div>
  );
};

export default RanChat;