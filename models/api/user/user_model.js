import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: String,
  token: String,
  createdOn: {
    type: Date,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
