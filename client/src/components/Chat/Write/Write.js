import React, { Component } from 'react';

import './Write.css';

class Write extends Component {

  state = {
    message: ''
  };

  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.message) {
      return;
    }

    this.props.onSendRandom(this.state.message);

    // clear input
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div className="container writeWrapper">
        <div className="row">
          <form id="write-form">
            <input
              name="message"
              type="text"
              className="form-control fix-height"
              value={this.state.message}
              disabled={this.props.count <= 1 ? true : false}
              onChange={this.handleChange} />
            <button
              type="submit"
              className=" btn btn-primary fix-height"
              disabled={this.props.count <= 1 ? "disabled" : null}
              onClick={this.handleSubmit}>보내기</button>
          </form>
        </div>
      </div>
    );
  }
};

export default Write;