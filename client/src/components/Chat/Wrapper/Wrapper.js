import React from 'react';

import { Header, Message, Write } from 'components';

import './Wrapper.css';

const Wrapper = ({isRanChat, socket}) => {
  return (
    <div id="chatWrapper">
      <Header />
      <Message />
      <Write />
    </div>
  );
};

export default Wrapper;