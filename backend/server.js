const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => res.json(tasks));

app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.json({ message: "Task added" });
});

app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running"));