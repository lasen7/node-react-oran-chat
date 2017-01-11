import sockets, { rooms } from './sockets';
import msgTypes from './msgTypes';

/**
 * data: {username: 'hspark'}
 */
export const joinRandom = (io, socket) => {
  socket.on(msgTypes.JOIN_RANDOM, data => {
    console.log('======= Join room =========');

    let roomId = null;

    // Find a room with one user 
    for (let room in rooms) {
      if (rooms[room].count === 1) {
        roomId = room;
        break;
      }
    }

    if (!roomId) {
      // If there is no room, add new room
      rooms[socket.id] = {
        count: 1,
        user1: data.username
      };

      roomId = socket.id;
    } else {
      // If there is room, increase count
      rooms[roomId].count = 2;
      rooms[roomId].user2 = data.username;
    }

    socket.join(roomId);

    let msg = rooms[roomId];
    msg.roomId = roomId;

    io.emit(roomId).emit(msgTypes.JOINED_RANDOM, msg);

    console.log('rooms: ', rooms);
  });
};

/**
 * data: { roomId: 'uuid', username: 'hspark', msg: 'hello' }
 */
export const sendRandom = (io, socket) => {
  socket.on(msgTypes.SEND_RANDOM, data => {
    console.log('======== send message ========');

    io.emit(data.roomId).emit(msgTypes.RECEIVE_RANDOM, data);
  });
};