const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    question: String,
    options: Array,
    gameId: String
});

//Mongoose#model(name, [schema], [collection], [skipInit])
module.exports = mongoose.model('Question', QuestionSchema, 'Question');