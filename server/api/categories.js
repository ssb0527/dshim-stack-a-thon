const router = require('express').Router()
const { models: { Category }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Category.findAll());
  } 
  catch (err) {
    next(err)
  }
})
