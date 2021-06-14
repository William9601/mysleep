const express = require('express')
const router = express.Router()
const controller = require('./controllers/controller')
const dataController = require('./controllers/dataController')

router.post('/habits', controller.addHabit)
router.post('/getData', controller.getData)
router.get('/sortedData', dataController.finalData)

module.exports = router
