const router = require('express').Router()
const { models: { CatTemp, Category, Temperature }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.send(await CatTemp.findAll({
      include: [ Category, Temperature ]
    }));
  } 
  catch (err) {
    next(err)
  }
})
