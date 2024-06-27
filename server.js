const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
const connectDB = require('./database');
const todoRoutes = require('./routes/todoRoute')
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(cors());
connectDB()
app.use("/api/auth", todoRoutes)
app.listen(PORT, () => {
    console.log(`Server Running on port : ${PORT}`)
})
