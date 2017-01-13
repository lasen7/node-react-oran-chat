import React, { Component } from 'react';

import alertify from 'alertifyjs';

import './Login.css';

class Login extends Component {
  state = {
    username: ''
  };

  componentDidMount() {
    this.setState({
      username: this.props.username
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.username
    });
  }

  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.id] = e.target.value;
    this.setState(nextState);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let username = this.state.username;
    username = username.trim();

    if (username.length < 1) {
      alertify.error('Please input username!');
      return;
    }

    this.props.onRegister(username);
  }

  render() {
    return (
      <div>
        <h2 id="login-header">Oran Chat</h2>
        <form>
          <div className="form-group">
            <label className="sr-only" htmlFor="username">사용자명</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="사용자명"
              value={this.state.username}
              onChange={this.handleChange} />
            <button
              type="submit"
              className="form-control btn btn-default marginTop-1"
              onClick={this.handleSubmit}>입장하기</button>
          </div>
        </form>
      </div>
    );
  }
};

export default Login;