import mongoose, { Schema } from 'mongoose';

const OpenChat = new Schema({
  title: String
});

// static method

OpenChat.statics.addOpenChat = function (title) {
  const openChat = new this({
    title
  });

  return openChat.save();
};

OpenChat.statics.getOpenChat = function () {
  return this.find({}, { _id: 1, title: 1 }).exec();
};

OpenChat.statics.deleteOpenChat = function (_id) {
  return this.remove({ _id }).exec();
}

export default mongoose.model('OpenChat', OpenChat);