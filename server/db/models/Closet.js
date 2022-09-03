const Sequelize = require('sequelize')
const { INTEGER } = Sequelize;
const db = require('../db');

const Closet = db.define('closet', {
   userId: {
    type: INTEGER,
    allowNull: false
   }
});

module.exports = Closet;