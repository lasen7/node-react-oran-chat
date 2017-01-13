import ActionTypes from './ActionTypes';

import { createAction } from 'redux-actions';

import * as service from 'services/user';

// export const getUser = () => {
//   return {
//     type: ActionTypes.GET_USER,
//     payload: {
//       promise: service.getUser()
//     }
//   }
// };

export const getUser = createAction(ActionTypes.GET_USER);

export const setUser = createAction(ActionTypes.SET_USER);