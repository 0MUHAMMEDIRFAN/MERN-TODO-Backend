const mongoose = require("mongoose");
const database_url = process.env.DATABASE_URL;

const connectDB = () => {
    mongoose.connect(database_url, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }).then(() => {
        console.log("Database Connected")
    }).catch(console.error)
}

module.exports = connectDB