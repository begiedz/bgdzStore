const express = require('express');
const router = express.Router();

const { indexPage, getPosts, createPost } = require('../controllers/postController');

// GET all posts
router.get('/', indexPage);
router.get('/posts/', getPosts);
// POST a post
router.post('/posts/create', createPost);

module.exports = router;
