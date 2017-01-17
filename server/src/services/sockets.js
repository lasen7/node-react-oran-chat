import * as ranChatHandler from './ranChatHandler';
import * as openChatHandler from './openChatHandler';

// for ranChat
export let rooms = {};

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
};

export const disconnect = (socket) => {
  console.log('======== disconnect ========: ', socket.id);

  if (socket.roomId) {
    delete rooms[socket.roomId];
  }
};