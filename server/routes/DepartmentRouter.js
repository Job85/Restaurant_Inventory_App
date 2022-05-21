const Router = require('express').Router()
const controller = require('../controllers/DepartmentController')

Router.get('/', controller.getDepartment)
Router.post('/create', controller.createDepartment)
Router.put('/update/:id', controller.updateDepartment)
Router.delete('/delete', controller.deleteDepartment)

module.exports = Router