import ActionTypes from 'actions/ActionTypes';
import * as rs from 'utils/requestStatus';

const initialState = {
  ranChat: {
    roomId: '',
    user1: '',
    user2: '',
    count: 0,
    messages: []
  },
  openChat: {
    list: []
  },
  requests: {
    openChatList: {
      ...rs.request
    },
    openChatAdd: {
      ...rs.request
    }
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
    case ActionTypes.CLEAN_RANDOM:
      return {
        ...state,
        ranChat: {
          ...state.ranChat,
          roomId: '',
          user1: '',
          user2: '',
          count: 0,
          messages: []
        }
      }
    case ActionTypes.GET_CHANNEL + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          openChatList: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.GET_CHANNEL + '_FULFILLED':
      return {
        ...state,
        openChat: {
          ...state.openChat,
          list: payload.data
        },
        requests: {
          ...state.requests,
          openChatList: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.GET_CHANNEL + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          openChatList: {
            ...rs.rejected,
            error: payload
          }
        }
      }
    case ActionTypes.ADD_CHANNEL + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          openChatAdd: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.ADD_CHANNEL + '_FULFILLED':
      return {
        ...state,
        openChat: {
          ...state.openChat,
          list: [
            ...state.openChat.list,
            payload.data
          ]
        },
        requests: {
          ...state.requests,
          openChatAdd: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.ADD_CHANNEL + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          openChatAdd: {
            ...rs.rejected,
            error: payload
          }
        }
      }
    case ActionTypes.ADDED_CHANNEL:
      return {
        ...state,
        openChat: {
          ...state.openChat,
          list: [
            ...state.openChat.list,
            payload
          ]
        }
      }
    default:
      return state;
  }
}