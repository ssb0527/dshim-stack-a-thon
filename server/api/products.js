const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Product.findAll());
  } 
  catch (err) {
    next(err)
  }
})
