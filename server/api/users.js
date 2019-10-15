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
        attributes: ['id', 'email']
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  })
})
