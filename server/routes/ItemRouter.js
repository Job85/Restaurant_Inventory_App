const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/', controller.getItems)
Router.get(`/:id`, controller.getItemById)
Router.post('/create_item', controller.postItem)
Router.put('/update_item', controller.putItemById)
Router.delete('/delete_item/:id', controller.deleteItemById)


module.exports = Router