const {ObjectId} = require('mongodb')

let stories; //instance of the Collection class
exports.initCollection= (db) =>{
    stories= db.collection('stories');
}
exports.find = () => stories.find().toArray();

exports.findByID = id => stories.findOne({_id: ObjectId(id)});

exports.save = (story) => stories.insertOne(story);

exports.updateById = (id, newStory)=> stories.findOneAndUpdate({_id: ObjectId(id)},
{$set: {title: newStory.title, content: newStory.content}});


exports.deleteById = (id)=> stories.deleteOne({_id: ObjectId(id)});