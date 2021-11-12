const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RequestSchema = new Schema({
    endpoint: String,
    method: String,
    requests: Number
});

//Mongoose#model(name, [schema], [collection], [skipInit])
module.exports = mongoose.model('Request', RequestSchema, 'Request');