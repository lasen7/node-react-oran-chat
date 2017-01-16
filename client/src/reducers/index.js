import { combineReducers } from 'redux';

import user from './user';
import chat from './chat';

const reducers = {
  user,
  chat
};

export default combineReducers(reducers);