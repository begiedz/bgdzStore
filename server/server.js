const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');

//middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.json());

//routes
app.use('/', postRoutes);

//server listening
app.listen(3000, 'localhost', () => {
  console.log(`App available on http://localhost:3000`);
});
