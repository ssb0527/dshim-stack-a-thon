const router = require('express').Router()
const { models: { Temperature }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await Temperature.findAll());
  } 
  catch (err) {
    next(err)
  }
})
