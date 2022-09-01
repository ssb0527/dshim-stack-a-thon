const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db');

const Temperature = db.define('temperature', {
   range: {
    type: STRING,
    unique: true,
    allowNull: false
   }
});

module.exports = Temperature;