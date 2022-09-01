const router = require('express').Router()
const { models: { Color }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Color.findAll());
  } 
  catch (err) {
    next(err)
  }
})
