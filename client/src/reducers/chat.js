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
    list: [],
    userCount: {}
  },
  channel: {
    title: '',
    roomId: '',
    messages: []
  },
  requests: {
    getChannel: {
      ...rs.request
    },
    addChannel: {
      ...rs.request
    },
    getChannelInfo: {
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
          getChannel: {
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
          getChannel: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.GET_CHANNEL + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          getChannel: {
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
          addChannel: {
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
          addChannel: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.ADD_CHANNEL + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          addChannel: {
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
    case ActionTypes.GET_CHANNEL_INFO + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          getChannelInfo: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.GET_CHANNEL_INFO + '_FULFILLED':
      return {
        ...state,
        channel: {
          ...state.channel,
          title: payload.data.title
        },
        requests: {
          ...state.requests,
          getChannelInfo: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.GET_CHANNEL_INFO + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          getChannelInfo: {
            ...rs.rejected,
            error: payload
          }
        }
      }
    case ActionTypes.JOINED_OPEN:
      const welcomeMsg = payload.username + '님이 입장하였습니다';

      return {
        ...state,
        channel: {
          ...state.channel,
          messages: [
            ...state.channel.messages,
            { message: welcomeMsg }
          ],
          roomId: payload.roomId
        }
      }
    case ActionTypes.RECEIVED_OPEN:
      return {
        ...state,
        channel: {
          ...state.channel,
          messages: [
            ...state.channel.messages,
            payload
          ]
        }
      }
    case ActionTypes.LEAVED_OPEN:
      const leaveMsg = payload.username + '님이 퇴장하였습니다';

      return {
        ...state,
        channel: {
          ...state.channel,
          messages: [
            ...state.channel.messages,
            { message: leaveMsg }
          ]
        }
      }
    case ActionTypes.GET_USER_COUNT:
      return {
        ...state,
        openChat: {
          ...state.openChat,
          userCount: payload
        }
      }
    default:
      return state;
  }
}