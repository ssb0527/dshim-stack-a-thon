const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db');

const Family = db.define('family', {
   name: {
    type: STRING,
    unique: true,
    allowNull: false
   }
});

module.exports = Family;