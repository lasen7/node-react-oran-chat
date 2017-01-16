import ActionTypes from './ActionTypes';

import { createAction } from 'redux-actions';

export const joinedRandom = createAction(ActionTypes.JOINED_RANDOM);

export const receivedRandom = createAction(ActionTypes.RECEIVED_RANDOM);

export const leavedRandom = createAction(ActionTypes.LEAVED_RANDOM);