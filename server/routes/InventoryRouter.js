const Router = require('express').Router()
const controller = require('../controllers/InventoryController')

Router.get('/', controller.getInventory)
Router.post(`/create_inventory`, controller.postInventory)
Router.put(`/update_inventory`, controller.putInventory)
Router.delete(`/delete_inventory`, controller.deleteInventory)