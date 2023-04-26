const Sequelize = require('sequelize');

const sequelize = new Sequelize('bvad0oboqpv1ng9wslgd', 'uwvhkq0cr0xxcovy', 'sAzmJ6vNnfJf3Okj8ijP', {
  host: 'bvad0oboqpv1ng9wslgd-mysql.services.clever-cloud.com',
  dialect: 'mysql',
});

module.exports = sequelize;