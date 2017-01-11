import socketio from 'socket.io';
import * as ranHandler from './ranChatHandler';
import { connect, disconnect } from './sockets';

const chatService = (http) => {
  let io = socketio(http);

  io.on('connection', socket => {
    connect(io, socket);

    socket.on('disconnect', data => {
      disconnect(socket);
    });
  });
};

export default chatService;