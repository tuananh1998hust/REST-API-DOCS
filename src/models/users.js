import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('users', UserSchema);
