import React from 'react';

import { OpenChatInfo, Fab } from 'components';

import './OpenChatList.css';

const OpenChatList = ({channel, onAddChannel}) => {
  const mapToChannel = channel.map((data, index) => {
    return (
      <OpenChatInfo
        data={data}
        key={data._id}
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