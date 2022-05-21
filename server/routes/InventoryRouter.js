const Router = require('express').Router()
const controller = require('../controllers/InventoryController')

Router.get('/', controller.getInventory)
Router.post(`/create`, controller.postInventory)
Router.put(`/update`, controller.putInventory)
Router.delete(`/delete`, controller.deleteInventory)

module.exports = Router