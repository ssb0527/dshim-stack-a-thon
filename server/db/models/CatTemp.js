const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize')
const { STRING } = Sequelize;
const db = require('../db');

const CatTemp = db.define('catTemp', {
   categoryId: {
    type: INTEGER,
    allowNull: false
   },
   temperatureId: {
    type: INTEGER,
    allowNull: false
   }
});

module.exports = CatTemp;