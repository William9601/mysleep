const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/habits', controller.addHabit)
router.get('/habits', controller.getHabits)
router.post('/habits-update', controller.updateHabit)

module.exports = router
