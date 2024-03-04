const Sequelize = require('sequelize');

const sequelize = new Sequelize('sharpener_nodejs', 'root', '******', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
