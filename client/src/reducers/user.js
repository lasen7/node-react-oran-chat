import ActionTypes from 'actions/ActionTypes';

const initialState = {
  username: ''
};

export default function user(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.GET_USER:
      return {
        ...state,
        username: payload
      }
    case ActionTypes.SET_USER:
      return {
        ...state,
        username: payload
      }
    default:
      return state;
  }
}