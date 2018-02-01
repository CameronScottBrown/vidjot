const mongoose = require('mongoose');

// import schema
const Schema = mongoose.Schema;

// create schema for video ideas
const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()}
});


// create our model (ideas) and connect it to IdeaSchema
mongoose.model('ideas', IdeaSchema);