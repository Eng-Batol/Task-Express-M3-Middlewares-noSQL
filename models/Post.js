const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  slug: String,
});

module.exports = model("Post", PostSchema);
