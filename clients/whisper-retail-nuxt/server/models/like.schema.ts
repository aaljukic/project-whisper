import mongoose from 'mongoose';


const LikeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  confession: {
    type: String,
  },
  creationDate: {
    type: Number,
  },
});

export const Like = mongoose.model('like', LikeSchema);
