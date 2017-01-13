import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HomeWrapper } from 'components';

import { browserHistory } from 'react-router';

import * as user from 'actions/user';

import storage from 'utils/storage';

class Home extends Component {

  componentDidMount() {
    const username = storage.get('username');

    this.props.UserActions.getUser(username);
  }

  render() {
    return (
      <div>
        <HomeWrapper
          username={this.props.username}
          onRegister={this.register} />
      </div>
    );
  }

  register = (username) => {
    storage.set('username', username);

    this.props.UserActions.setUser(username);

    browserHistory.push('/lobby/ran');
  }
}

Home = connect(state => {
  return {
    username: state.user.username
  }
}, dispatch => {
  return {
    UserActions: bindActionCreators({
      getUser: user.getUser,
      setUser: user.setUser
    }, dispatch)
  }
})(Home);

export default Home;