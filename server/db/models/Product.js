const Sequelize = require('sequelize')
const { STRING, TEXT } = Sequelize;
const db = require('../db');

const Product = db.define('product', {
   name: {
    type: STRING,
    allowNull: false
   },
   image: {
    type: TEXT
   }
});

module.exports = Product;