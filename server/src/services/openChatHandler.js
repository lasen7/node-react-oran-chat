import msgTypes from './msgTypes';

/**
 * data: { username: 'hspark', roomId: '5875e4703db5e219f0dff66d' }
 */
export const joinOpen = (io, socket) => {
  socket.on(msgTypes.JOIN_OPEN, data => {
    console.log('======== JOIN_OPEN ========');

    socket.join(data.roomId);

    io.emit(data.roomId).emit(msgTypes.JOINED_OPEN, data);
  });
};

/**
 * data: { username: 'hspark', msg: 'hello', roomId: '5875e4703db5e219f0dff66d' }
 */
export const sendOpen = (io, socket) => {
  socket.on(msgTypes.SEND_OPEN, data => {
    console.log('======== SEND_OPEN ========');

    io.emit(data.roomId).emit(msgTypes.RECEIVE_OPEN, data);
  });
};

/**
 * data: { roomId: '5875e4703db5e219f0dff66d', username: 'hspark' }
 */
export const leaveOpen = (io, socket) => {
  socket.on(msgTypes.LEAVE_OPEN, data => {
    console.log('======== LEAVE_OPEN ========');

    socket.leave(data.roomId);

    io.emit(data.roomId).emit(msgTypes.LEAVED_OPEN, data);
  });
};

export const addChannel = (socket) => {
  socket.on(msgTypes.ADD_CHANNEL, data => {
    console.log('======== LEAVE_OPEN ========');

    socket.broadcast.emit(msgTypes.ADDED_CHANNEL, data);
  });
};