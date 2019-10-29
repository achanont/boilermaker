const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('../apiRoutes'));

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const PORT = 1337;

const server = app.listen(PORT, err => {
  if (err) throw err;

  console.log(`listening on port ${PORT}`);

  db.sync({ force: true }).then(() => {
    console.log('postgres is connected now');
  });
});

module.exports = server;
