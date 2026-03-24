const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users.map((user) => user.toJSON().name));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUser,
};
