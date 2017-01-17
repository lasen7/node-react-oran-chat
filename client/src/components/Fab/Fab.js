/* global $ */
import React, { Component } from 'react';

import alertify from 'alertifyjs';

import './Fab.css';

// Floating action button
class Fab extends Component {

  state = {
    title: ''
  };

  componentDidMount() {
    $('#myModal').on('shown.bs.modal', e => {
      this.inputTitle.focus();
    });
  }

  handleSubmit = () => {
    const {title} = this.state;

    if (!title) {
      alertify.error('이름을 입력해 주세요');
      return;
    }

    $('#myModal').modal('hide');

    this.props.onAddEvent(this.state.title)
      .then(() => {
        this.setState({
          title: ''
        });
      });
  }

  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleKeyPress = (e) => {
    if (e.charCode === 13) {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div id="fab-wrapper">
        <button
          data-toggle="modal" data-target="#myModal"
          className="btn btn-primary fab">+</button>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="fabModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="fabModal">오픈채팅 이름</h4>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="이름을 입력하세요"
                  name="title"
                  ref={ref => { this.inputTitle = ref } }
                  value={this.state.title}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">닫기</button>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>추가하기</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default Fab;