const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const app = express();
connectDb();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/posts", postsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path Not Found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message || "Internal Server Error" });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
