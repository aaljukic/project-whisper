import mongoose from 'mongoose';


const DislikeSchema = new mongoose.Schema({
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

export const Dislike = mongoose.model('dislike', DislikeSchema);
