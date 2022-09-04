const router = require('express').Router()
const isLoggedIn = require('./middleware');
module.exports = router
// const { models: { Look }} = require('../db')

router.get('/', isLoggedIn, async (req, res, next) => {
    try {
      res.send(await req.user.getLooks());
    } 
    catch (err) {
      next(err)
    }
});

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    res.status(201).send(await req.user.saveLook(req.body));
  } 
  catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     res.status(201).send(await Look.create(req.body));
//   } 
//   catch (err) {
//     next(err)
//   }
// })
