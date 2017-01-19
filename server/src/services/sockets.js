import * as ranChatHandler from './ranChatHandler';
import * as openChatHandler from './openChatHandler';

// for ranChat
export let rooms = {};
export let channel = {};

export const connect = (io, socket) => {
  console.log('======== Connection ========: ', socket.id);

  // register socket event in handler
  ranChatHandler.joinRandom(io, socket);
  ranChatHandler.sendRandom(io, socket);
  ranChatHandler.leaveRandom(io, socket);

  openChatHandler.joinOpen(io, socket);
  openChatHandler.sendOpen(io, socket);
  openChatHandler.leaveOpen(io, socket);
  openChatHandler.addChannel(socket);

  openChatHandler.getUserCount(io, socket);
};

export const disconnect = (socket) => {
  console.log('======== disconnect ========: ', socket.id);

  // ran Chat
  if (socket.roomId) {
    delete rooms[socket.roomId];
  }

  // When you disconnect without calling the leave function
  if (channel[socket.openRoomId]) {
    channel[socket.openRoomId] -= 1;
  }
};