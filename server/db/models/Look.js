const Sequelize = require('sequelize')
const { TEXT, DATEONLY, STRING } = Sequelize;
const db = require('../db');

const Look = db.define('look', {
   outerwearImage: {
    type: TEXT
   },
   topImage: {
    type: TEXT
   },
   bottomImage: {
    type: TEXT
   },
   shoeImage: {
    type: TEXT
   },
   date: {
    type: DATEONLY
   },
   temperature: {
    type: STRING
   },
   note: {
    type: TEXT
   }
});

module.exports = Look;