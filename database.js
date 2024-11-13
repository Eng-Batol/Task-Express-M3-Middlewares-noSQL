const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://khadeejah:khadeejah@cluster0.7j3f8.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
  // const conn = await mongoose.connect("mongodb+srv://khadeejah:khadeejah@cluster0.7j3f8.mongodb.net/");
  // console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
