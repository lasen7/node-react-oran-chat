import ActionTypes from 'actions/ActionTypes';

const initialState = {
  ranChat: {
    roomId: '',
    user1: '',
    user2: '',
    count: 0,
    messages: []
  },
  openChat: {
    roomId: ''
  }
};

export default function user(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.JOINED_RANDOM:
      return {
        ...state,
        ranChat: {
          ...state.ranChat,
          roomId: payload.roomId,
          count: payload.count,
          user1: payload.user1,
          user2: payload.user2,
        }
      }
    case ActionTypes.RECEIVED_RANDOM:
      return {
        ...state,
        ranChat: {
          ...state.ranChat,
          messages: [
            ...state.ranChat.messages,
            payload
          ]
        }
      }
    case ActionTypes.LEAVED_RANDOM:
      let nextCount = state.ranChat.count - 1;
      return {
        ...state,
        ranChat: {
          ...state.ranChat,
          count: nextCount
        }
      }
    default:
      return state;
  }
}