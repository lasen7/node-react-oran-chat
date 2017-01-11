import * as ranHandler from './ranChatHandler';

// connect
// disconnect
// manage sockets

let sockets = {};
export let rooms = {};

export const connect = (io, socket) => {
  // store connection in sockets
  sockets[socket.id] = socket;

  // register socket event in handler
  ranHandler.joinRandom(io, socket);
  ranHandler.sendRandom(io, socket);

  console.log('======== Connection ========: ', socket.id);
};

export const disconnect = (socket) => {
  console.log('======== disconnect ========: ', socket.id);
};

export default sockets;