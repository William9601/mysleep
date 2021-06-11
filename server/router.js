const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/habits', controller.addHabit)
router.get('/habits', controller.getHabits)

module.exports = router;