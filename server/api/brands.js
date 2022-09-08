const router = require('express').Router()
const { models: { Brand }} = require('../db');
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Brand.findAll({
      order: [
        ['name', 'ASC']
      ]
    }));
  } 
  catch (err) {
    next(err)
  }
})
