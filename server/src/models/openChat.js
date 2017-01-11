import mongoose, { Schema } from 'mongoose';

const OpenChat = new Schema({
  roomId: String,
  title: String
});


export default mongoose.model('OpenChat', OpenChat);