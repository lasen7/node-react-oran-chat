import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';

import mongoose from 'mongoose';

import api from './routes';

import chatService from './services/chatService';

const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;

// setup middleware
app.use(bodyParser.json());

// setup morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// SERVE STATIC FILES
app.use('/', express.static(path.join(__dirname, '../../client/build/')));

// setup router
app.use('/api', api);

/* support client-side routing */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
});

// handle error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    msg: err.message
  });
});

// Connect mongodb
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log('Connected to mongod server');
});
mongoose.connect(process.env.DB_MONGO);

http.listen(port, () => {
  console.log('Server start port on ', port);
});

// setup socket.io
chatService(http);