const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); 
    console.log("database connected successfully");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = connectDB;
