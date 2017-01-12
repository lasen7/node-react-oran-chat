import React from 'react';

import './OpenChatInfo.css';

const OpenChatInfo = () => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-xs-9">
          <div id="openChat-room" className="text-overflow">리그오브레전드를 좋아하는 사람이면 오세요!</div>
          <div id="openChat-user">그룹채팅 15명</div>
        </div>
        <div id="openChat-join">
          <a href="#" className="btn btn-default">참여하기</a>
        </div>
      </div>
    </div >
  );
};

export default OpenChatInfo;