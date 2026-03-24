const express = require("express");
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  createMultipleTodos,
} = require("../controllers/todo.controller");

const router = express.Router();

router.post("/create", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.post("/createMultiple", createMultipleTodos);

module.exports = router;
