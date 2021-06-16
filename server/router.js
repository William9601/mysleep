const express = require('express')
const router = express.Router()
const controller = require('./controllers/controller')

router.post('/habits', controller.addHabit)
router.post('/getData', controller.getData)
router.get('/getList', controller.getList)

module.exports = router
