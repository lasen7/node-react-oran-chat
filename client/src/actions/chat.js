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

export const getChannelInfo = (roomId) => {
  return {
    type: ActionTypes.GET_CHANNEL_INFO,
    payload: {
      promise: service.getChannelInfo(roomId)
    }
  }
};

export const joinedOpen = createAction(ActionTypes.JOINED_OPEN);

export const receivedOpen = createAction(ActionTypes.RECEIVED_OPEN);

export const leavedOpen = createAction(ActionTypes.LEAVED_OPEN);
