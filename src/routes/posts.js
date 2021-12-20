// Dependencies
const express = require("express");

const Post = require("../models/Post");

const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err?.message });
  }
});

// GET specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req?.params?.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err?.message });
  }
});

// Create new post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req?.body?.title,
    description: req?.body?.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err?.message });
  }
});

// DELETE specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req?.params?.postId });
    res.json({
      message: `Successfully removed ${removedPost?.deletedCount} post.`,
    });
  } catch (err) {
    res.json({ message: err?.message });
  }
});

module.exports = router;
