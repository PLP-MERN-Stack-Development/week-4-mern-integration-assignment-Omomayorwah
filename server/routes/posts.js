const express = require("express");
const { createPost, getMyPosts, getAllPoats, updatePost, deletePost } = require("../controllers/postController");
const { protect, authorize } = require("../middleware/auth");
const router = express.Router();


router.post("/", protect, createPost);
router.get("/me", protect, getMyPosts);
router.get("/all", protect, authorize(["admin"]), getAllPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;