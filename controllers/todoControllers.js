const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

module.exports = getTodos;