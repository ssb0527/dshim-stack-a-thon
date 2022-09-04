const router = require('express').Router()
const isLoggedIn = require('./middleware');
module.exports = router

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
router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    await req.user.deleteLook(req.params.id);
    res.sendStatus(204);
  } 
  catch (err) {
    next(err)
  }
})