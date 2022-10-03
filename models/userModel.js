const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    likedbooks: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
