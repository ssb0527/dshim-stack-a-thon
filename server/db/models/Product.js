const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db');

const Product = db.define('product', {
   name: {
    type: STRING,
    allowNull: false
   },
   image: {
    type: STRING
   }
});

module.exports = Product;