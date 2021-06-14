const express = require('express')
const router = express.Router()
const controller = require('./controllers/controller')
const dataController = require('./controllers/dataController')
const api = require('./apiRequest')

router.post('/habits', controller.addHabit)
router.get('/habits', controller.getHabits)
// router.post('/getData', api.getGoogleData)
router.post('/getData', controller.getData)
router.get('/sortedData', dataController.finalData)

module.exports = router
