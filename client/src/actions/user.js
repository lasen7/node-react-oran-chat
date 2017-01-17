import ActionTypes from './ActionTypes';

import { createAction } from 'redux-actions';

export const getUser = createAction(ActionTypes.GET_USER);

export const setUser = createAction(ActionTypes.SET_USER);