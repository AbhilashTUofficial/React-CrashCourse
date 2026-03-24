const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMultipleTodos = async (req, res) => {
  try {
    const todos = await Todo.insertMany(req.body);
    res.status(201).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTodo,
  createMultipleTodos,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
