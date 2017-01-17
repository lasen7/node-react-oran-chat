import { rooms } from './sockets';
import msgTypes from './msgTypes';

import uuidV1 from 'uuid/v1';

/**
 * data: {username: 'hspark'}
 */
export const joinRandom = (io, socket) => {
  socket.on(msgTypes.JOIN_RANDOM, data => {
    console.log('======= JOIN_RANDOM =========');

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
      let uuid = uuidV1();
      rooms[uuid] = {
        count: 1,
        user1: data.username
      };

      roomId = uuid;
    } else {
      // If there is room, increase count
      rooms[roomId].count = 2;
      rooms[roomId].user2 = data.username;
    }

    // register roomId to socket
    socket.roomId = roomId;

    socket.join(roomId);

    let msg = rooms[roomId];
    msg.roomId = roomId;

    io.in(roomId).emit(msgTypes.JOINED_RANDOM, msg);

    console.log('rooms: ', rooms);
  });
};

/**
 * data: { roomId: 'uuid', username: 'hspark', msg: 'hello' }
 */
export const sendRandom = (io, socket) => {
  socket.on(msgTypes.SEND_RANDOM, data => {
    console.log('======== SEND_RANDOM ========', data);

    io.in(data.roomId).emit(msgTypes.RECEIVE_RANDOM, data);
  });
};

/**
 * data: { roomId: 'uuid', username: 'hspark' }
 */
export const leaveRandom = (io, socket) => {
  socket.on(msgTypes.LEAVE_RANDOM, data => {
    delete rooms[data.roomId];

    io.in(data.roomId).emit(msgTypes.LEAVED_RANDOM, data);

    socket.leave(data.roomId);

    console.log('======== LEAVE_RANDOM ========: ', rooms);
  });
};