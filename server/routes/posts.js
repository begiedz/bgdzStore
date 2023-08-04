const express = require('express');
const { getPosts, createPost } = require('../controllers/postController');
const router = express.Router();

// GET all posts
router.get('/', getPosts);
router.get('/posts/', getPosts);
router.get('/posts/create', createPost);

module.exports = router;
