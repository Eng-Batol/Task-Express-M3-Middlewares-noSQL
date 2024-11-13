const express = require("express");
const router = express.Router();
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require("./posts.controllers");

const slugMiddleware = require("./slugMiddleware");
const validate = require("./validation");

router.get("/", postsGet);
router.post("/", validate, slugMiddleware, postsCreate);
router.delete("/:postId", postsDelete);
router.put("/:postId", validate, slugMiddleware, postsUpdate);

module.exports = router;
