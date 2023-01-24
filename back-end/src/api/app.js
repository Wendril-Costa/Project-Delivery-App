const express = require('express');
const routers = require('../routes/routes');

const app = express();
app.use(express.json());

app.use('/', routers);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
