// connection to MySQL
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bgdzStore',
});

const indexPage = (req, res) => {
  res.json('Welcome to bgdzStore!');
};

const getPosts = (req, res) => {
  const q = 'SELECT * FROM store';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const createPost = (req, res) => {
  const q = 'INSERT INTO store (`title`, `description`, `price`) VALUES (?)';
  const values = ['test title', 'test description', '123'];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Post has been added');
  });
};

module.exports = {
  indexPage,
  getPosts,
  createPost,
};
