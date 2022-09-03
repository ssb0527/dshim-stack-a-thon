const router = require('express').Router()
const { models: { Family }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Family.findAll());
  } 
  catch (err) {
    next(err)
  }
})
