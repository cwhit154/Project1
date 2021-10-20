const express = require('express');
const controller = require('../controllers/connectionController');

const router = express.Router();

//GET /connections: send all connections to the user
router.get('/', controller.index);

//GET /connections/new: send html form for creating a new connection
router.get('/new' , controller.new);

//POST /connection: create a new connection
router.post('/', controller.create);

//GET /connection/:id send details of connection identified by id
router.get('/:id', controller.show);

//GET /connection/:id/edit: send the html form for editing an existing connection
router.get('/:id/edit', controller.edit);

//PUT /connection/:id: update the connection identified by id
router.put('/:id', controller.update);

//DELTE /connection/:id, delete the connection identified by id
router.delete('/:id', controller.delete);

module.exports = router;