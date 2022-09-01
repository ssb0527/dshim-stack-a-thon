const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'));
router.use('/brands', require('./brands'));
router.use('/categories', require('./categories'));
router.use('/temperatures', require('./temperatures'));
router.use('/colors', require('./colors'));
router.use('/products', require('./products'));
router.use('/catTemps', require('./catTemps'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
