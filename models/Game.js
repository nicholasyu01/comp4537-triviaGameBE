const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
    gameName: String
});

//Mongoose#model(name, [schema], [collection], [skipInit])
module.exports = mongoose.model('Game', GameSchema, 'Game');