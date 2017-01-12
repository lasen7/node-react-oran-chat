import React from 'react';

import './Login.css';

const Login = () => {
  return (
    <div>
      <h2 id="login-header">Oran Chat</h2>
      <form>
        <div className="form-group">
          <label className="sr-only" htmlFor="username">사용자명</label>
          <input type="text" className="form-control" id="username" placeholder="사용자명" />
          <button type="submit" className="form-control btn btn-default marginTop-1">입장하기</button>
        </div>
      </form>
    </div>
  );
};

export default Login;