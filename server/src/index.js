import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import mongoose from 'mongoose';

import api from './routes';

const app = express();
const port = process.env.PORT || 3000;

// setup middleware
app.use(bodyParser.json());

// setup morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// setup router
app.use('/api', api);

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

app.listen(port, () => {
  console.log('Server start port on ', port);
});