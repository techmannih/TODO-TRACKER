const express = require("express");
const connectDB = require("./db/conn");
const cors = require("cors");
const app = express();
require("dotenv").config();
const userRoutes=require("./routes/userRoutes")

// variables
const PORT = process.env.PORT || 8888;

// connectDB
connectDB();
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("server running");
});



app.use(express.json());
app.use(userRoutes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
