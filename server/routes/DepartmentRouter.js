const Router = require('express').Router()
const controller = require('../controllers/DepartmentController')

Router.get('/', controller.getDepartment)
Router.post('/create_department', controller.createDepartment)
Router.put('/update_department', controller.updateDepartment)
Router.delete('/delete_department', controller.deleteDepartment)

module.exports = Router