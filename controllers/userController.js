const User = require('../models/userModel');
const mongoose = require('mongoose');

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// get a single user
const getUser = async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: 'No such user' });
  }
  res.status(200).json(user);
};

// create new user

const createUser = async (req, res) => {
  const { email } = req.body;
  const exists = await User.findOne({ email: email });
  if (!exists) {
    try {
      const user = await User.create({
        email,
        likedbooks: [],
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// update a user
const updateUser = async (req, res) => {
  const { email, likedbookid } = req.body;
  const user = await User.findOne({ email: email });
  const exists = await user.likedbooks.includes(likedbookid);
  if (exists) {
    //remove
    const updatedLikes = await User.updateOne(
      { email: email },
      { $pull: { likedbooks: likedbookid } }
    );
    res.status(200).json(false);
  } else {
    //add
    const updatedLikes = await User.updateOne(
      { email: email },
      { $push: { likedbooks: likedbookid } }
    );
    res.status(200).json(true);
  }
};

module.exports = { getUsers, getUser, createUser, updateUser };
