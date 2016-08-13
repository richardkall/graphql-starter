import mongoose from 'mongoose';
import uuid from 'node-uuid';

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  email: String
});

export default mongoose.model('User', UserSchema);
