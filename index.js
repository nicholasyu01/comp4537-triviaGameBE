const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const game = require("./controller/game");
const question = require("./controller/question");
// const routes = require('./api/routes');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// handles CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


// DB Config
const db = require("./config/key").mongoURI;

// Connect to MongoDB
mongoose.connect(
    db, { useNewUrlParser: true }, { useUnifiedTopology: true }
).then(
    () => console.log("MongoDB successfully connected")
).catch(
    err => console.log(err)
);

// Routes
// app.use('/api', routes);
app.use('/api/game', game);
app.use('/api/question', question);


app.listen(port, () => console.log(`Server up and running on port ${port} !`));