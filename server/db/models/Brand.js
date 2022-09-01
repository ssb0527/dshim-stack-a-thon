const Sequelize = require('sequelize')
const { STRING, TEXT } = Sequelize;
const db = require('../db');

const Brand = db.define('brand', {
   name: {
    type: STRING,
    unique: true,
    allowNull: false
   },
   image: {
    type: TEXT
   },
   link: {
    type: TEXT
   }
});

module.exports = Brand;