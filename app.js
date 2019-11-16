const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => res.json({message: 'Hello World!'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));