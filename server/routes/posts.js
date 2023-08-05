const express = require('express');
const { indexPage, getPosts, createPost } = require('../controllers/postController');
const router = express.Router();

// GET all posts
router.get('/', indexPage);
router.get('/posts/', getPosts);
// POST a post
router.get('/posts/create', createPost);

module.exports = router;
