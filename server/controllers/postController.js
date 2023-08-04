const getPosts = (req, res) => {
  res.send('Welcome to bgdzStore');
};

const createPost = (req, res) => {
  res.send('create a post');
};

`GET /posts -> get all posts

POST /posts/create -> post a post

GET /posts/:id -> get specific post

DELETE /posts/:id -> delete specific post

PATCH /posts/:id -> update specific post`;

module.exports = {
  getPosts,
  createPost,
};
