const Sequelize = require('sequelize');

const db = require('./index');

const User = db.define({
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

module.exports = User;
