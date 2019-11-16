const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => res.json({message: 'Hello World!'}));

app.get('/api/posts', (req, res) => {
  res.json({
    message: 'Viewing all the posts'
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  res.json({
    message: 'Post created !'
  });
});

app.post('/api/login', (req, res) => {
  // Mock user, to be authenticated
  const user= {
    id: 1,
    username: "test",
    password: "testpw"
  }

  // sends information about user asynchonously.
  jwt.sign({user}, 'secretKey', (err, token) => {
    res.json({
      token
    })
  });
});

// Format of token
// Athorization: Bearer <access_token>

// Verify Token
// (Have to use es5 syntax for some reason)
function verifyToken (req, res, next) {
   // Get auth header value
   const bearerHeader = req.headers['authorization'];

   // Check if bearer is undefined
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));