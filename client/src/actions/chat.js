import ActionTypes from './ActionTypes';

import { createAction } from 'redux-actions';

import * as service from 'services/chat';

export const joinedRandom = createAction(ActionTypes.JOINED_RANDOM);

export const receivedRandom = createAction(ActionTypes.RECEIVED_RANDOM);

export const leavedRandom = createAction(ActionTypes.LEAVED_RANDOM);

export const cleanRandom = createAction(ActionTypes.CLEAN_RANDOM);

export const getOpenList = () => {
  return {
    type: ActionTypes.GET_OPEN_LIST,
    payload: {
      promise: service.getOpenList()
    }
  }
};

export const addOpenList = (title) => {
  return {
    type: ActionTypes.ADD_OPEN_LIST,
    payload: {
      promise: service.addOpenList(title)
    }
  }
}