import ActionTypes from './ActionTypes';

import { createAction } from 'redux-actions';

import * as service from 'services/chat';

export const joinedRandom = createAction(ActionTypes.JOINED_RANDOM);

export const receivedRandom = createAction(ActionTypes.RECEIVED_RANDOM);

export const leavedRandom = createAction(ActionTypes.LEAVED_RANDOM);

export const cleanRandom = createAction(ActionTypes.CLEAN_RANDOM);

export const getChannel = () => {
  return {
    type: ActionTypes.GET_CHANNEL,
    payload: {
      promise: service.getChannel()
    }
  }
};

export const addChannel = (title) => {
  return {
    type: ActionTypes.ADD_CHANNEL,
    payload: {
      promise: service.addChannel(title)
    }
  }
}

export const addedChannel = createAction(ActionTypes.ADDED_CHANNEL);