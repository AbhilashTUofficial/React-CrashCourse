const express = require("express");
const {
  createNormalTodo,
  createDailyTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  createMultipleTodos,
  getAllDailyTodo,
} = require("../controllers/todo.controller");

const router = express.Router();

router.post("/create", createNormalTodo);
router.post("/createDaily", createDailyTodo);
router.get("/getDailyAllTodo", getAllDailyTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.post("/createMultiple", createMultipleTodos);

module.exports = router;
