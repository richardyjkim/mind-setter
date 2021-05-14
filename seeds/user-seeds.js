const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
  {
    username: 'richard',
    password: '1234'
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;