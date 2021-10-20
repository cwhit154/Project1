const model = require('../models/connection');
// Sends all the connections 
exports.index = (req, res)=>{
   let connections = model.find();
   res.render('./Events/Connections', {connections});
};

// Sends to new connection page
exports.new = (req, res)=>{
    res.render('./Events/newConnection');
};

// Sends to connections page with adding new data
exports.create = (req, res)=>{
    let Connection = req.body;
    model.save(Connection);
    res.redirect('/connections');
};

// Finds the clicked on event
exports.show = (req, res, next)=>{
    let id = req.params.id;
    let connection = model.findByID(id);
    if(connection) {
        res.render('./Events/Connection', {connection});
    } else {
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
    
};

// Pulls info from evenit to be edited
exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let connection = model.findByID(id);
    if(connection) {
        res.render('./Events/edit', {connection});
    } else {
        let err = new Error('Cannot find a Connection with id ' + id);
        err.status = 404;
        next(err);
    }
       
};

// Enables updates of events
exports.update = (req, res, next)=>{
    let connection = req.body;
    let id = req.params.id;

    if(model.updateById(id, connection)){
        res.redirect('/connections/' + id)
    } else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};

// Able to delete a event specified by ID
exports.delete = (req, res, next)=>{
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/connections')
    } else {
        let err = new Error('Cannot find a Connection with id ' + id);
        err.status = 404;
        next(err); 
    }
};