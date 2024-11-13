const express = require("express");
const upload = require("../../middleware/multer");
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
router.post("/", upload.single("image"), validate, slugMiddleware, postsCreate);
router.delete("/:postId", postsDelete);
router.put("/:postId", validate, slugMiddleware, postsUpdate);

module.exports = router;
