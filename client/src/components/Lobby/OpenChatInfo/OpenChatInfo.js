import React from 'react';

import { Link } from 'react-router';

import './OpenChatInfo.css';

const OpenChatInfo = ({data, userCount}) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-xs-9">
          <div id="openChat-room" className="text-overflow">{data.title}</div>
          <div id="openChat-user">{`그룹채팅 ${userCount}명`}</div>
        </div>
        <div id="openChat-join">
          <Link
            className="btn btn-default"
            to={`/chat/${data._id}`}>참여하기</Link>
        </div>
      </div>
    </div >
  );
};

export default OpenChatInfo;