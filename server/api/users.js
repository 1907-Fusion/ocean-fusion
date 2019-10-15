const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router
function requireAdminStatus(req, res, callback) {
  if (req.user && req.user.isAdmin) {
    callback()
  } else {
    res.redirect('/user-home')
  }
}
router.get('/', async (req, res, next) => {
  requireAdminStatus(req, res, async () => {
    try {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email', 'score']
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  })
})
router.get('/:id', async (req, res, next) => {
  requireAdminStatus(req, res, async () => {
    try {
      const user = await User.findByPk(req.params.id)
      res.json(user)
    } catch (err) {
      next(err)
    }
  })
})
router.put('/:id', async (req, res, next) => {
  requireAdminStatus(req, res, async () => {
    try {
      const user = await User.findByPk(req.params.id)
      const updatedUser = user.update({score: req.body.score})
    } catch (err) {
      next(err)
    }
  })
})
