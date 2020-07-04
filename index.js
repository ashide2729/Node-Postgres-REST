const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbConnect");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

// create todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todotable (description) VALUES($1) RETURNING *", [description]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todotable");
        res.json(allTodos.rows);
    } catch (err) {
        console.log(err.message);
    }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todotable WHERE id=$1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todotable WHERE id=$1", [id]);
        res.json("Deleted todo");
    } catch (err) {
        console.log(err.message);
    }
});

// edit todo

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const editTodo = await pool.query("UPDATE todotable SET description=$1 WHERE id=$2", [description, id]);
        res.json("Updated todo");
    } catch (err) {
        console.log(err.message);
    }
});
