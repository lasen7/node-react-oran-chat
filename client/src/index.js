import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';

import { App, Home, Lobby, Chat, NotFound } from 'containers';

import './index.css';
import './animation.css';
import './assets/css/fontello.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/chat" component={Chat} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
