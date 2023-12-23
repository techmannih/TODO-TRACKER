const express = require('express')
const connectDB = require("./db/conn");

const app = express()


// variables
const PORT = process.env.PORT || 8888

// connectDB
connectDB();

// routes
app.get('/', (req, res) => {
    res.send("server running")
})
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
  });