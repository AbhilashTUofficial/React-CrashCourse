const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const todoRoutes = require("./routes/todo.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

module.exports = app;
