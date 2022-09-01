const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db');

const Category = db.define('category', {
   name: {
    type: STRING,
    unique: true,
    allowNull: false
   }
});

module.exports = Category;