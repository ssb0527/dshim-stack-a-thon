const router = require('express').Router()
const isLoggedIn = require('./middleware');
module.exports = router

router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.getCloset());
  } 
  catch (err) {
    next(err)
  }
})
