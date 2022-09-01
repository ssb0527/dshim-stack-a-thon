const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db');

const Color = db.define('color', {
   name: {
    type: STRING,
    unique: true,
    allowNull: false
   }
});

module.exports = Color;