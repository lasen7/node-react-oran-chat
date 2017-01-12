import React from 'react';

import './Write.css';

const Write = () => {
  return (
    <div className="container writeWrapper">
      <div className="row">
        <form id="write-form">
          <input type="text" className="form-control fix-height" />
          <button type="submit" className=" btn btn-primary fix-height">보내기</button>
        </form>
      </div>
    </div>
  );
};

export default Write;