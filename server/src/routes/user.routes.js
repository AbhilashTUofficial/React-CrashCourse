const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/create", createUser);
router.get("/", (req, res) => res.send("get users"));
router.get("/current/:id", (req, res) => res.send("get user " + req.params.id));
router.get("/1", (req, res) => res.send("user 1"));
router.get("/2", (req, res) => res.send("user 2"));
router.get("/3", (req, res) => res.send("user 3"));
router.get("/all", getUsers);

module.exports = router;
