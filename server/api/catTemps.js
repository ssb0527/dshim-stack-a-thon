const router = require('express').Router()
const { models: { CatTemp }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await CatTemp.findAll());
  } 
  catch (err) {
    next(err)
  }
})
