const Sequelize = require('sequelize')
const { INTEGER } = Sequelize;
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