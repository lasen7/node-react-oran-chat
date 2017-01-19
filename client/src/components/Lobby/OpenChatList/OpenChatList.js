import React from 'react';

import { OpenChatInfo, Fab } from 'components';

import './OpenChatList.css';

const OpenChatList = ({channel, userCount, onAddChannel}) => {
  const mapToChannel = channel.map((data, index) => {
    return (
      <OpenChatInfo
        data={data}
        key={data._id}
        userCount={userCount[data._id] === undefined ? 0 : userCount[data._id]}
        index={index} />
    );
  });

  return (
    <div className="container openChatList">
      {mapToChannel}
      <Fab onAddChannel={onAddChannel} />
    </div>
  );
};

export default OpenChatList;