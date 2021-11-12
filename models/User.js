const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

//Mongoose#model(name, [schema], [collection], [skipInit])
module.exports = User = mongoose.model("User", UserSchema, 'User');
