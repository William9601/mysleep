const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/habits', controller.addHabit)

module.exports = router;