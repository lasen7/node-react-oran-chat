import React from 'react';

import './RanChat.css';

const RanChat = () => {
  return (
    <div className="container text-center ranChat">
      <h2 id="ranChat-header">랜덤 채팅을 해보세요!</h2>
      <button type="submit" className="form-control btn btn-default">시작하기</button>
    </div>
  );
};

export default RanChat;