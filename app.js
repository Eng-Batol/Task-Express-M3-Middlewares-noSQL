const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path"); // Import the path module
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

const app = express();
connectDb();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Serve static files from the "media" folder
app.use("/media", express.static(path.join(__dirname, "media")));

// Set up the posts route
app.use("/posts", postsRoutes);

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message || "Internal Server Error" });
});

// Start the server
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
