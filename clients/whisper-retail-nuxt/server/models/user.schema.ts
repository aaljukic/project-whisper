import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  lastActivity: {
    type: Number,
  },
});

export const User = mongoose.model('user', UserSchema);
