const express = require("express")
const router = express.Router();

const { getTodos } = require("../controllers/todoControllers")

router.get('/todos', getTodos);

module.exports = router;