const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); 

//ROUTES

// GET all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows);
    } catch (error) {
        console.error(err.message)
    }
})

// GET a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})


// CREATE a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (description) VALUES ($1) RETURNING * ",
      [description]
      );
      res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
          "UPDATE todos SET description = $1 WHERE id = $2 RETURNING *",
          [description, id]
        );
        res.json("Todo was updated");
    } catch (err) {
        console.error(err.message)
    }
})

// DELETE a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todos WHERE id = $1", [id]);
        res.json("Todo was deleted!");
    } catch (err) {
        console.error(err.message)
    }
})

// API endpoint
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
