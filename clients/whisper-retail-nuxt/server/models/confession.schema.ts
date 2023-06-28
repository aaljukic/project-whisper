import mongoose from 'mongoose';


const ConfessionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
  },
  dislikeCount: {
    type: Number,
  },
  commentCount: {
    type: Number,
  },
  creationDate: {
    type: Number,
  },
  approved: {
    type: Boolean,
  },
});

export const Confession = mongoose.model('confession', ConfessionSchema);
