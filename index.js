const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const passport = require("passport");

const game = require("./controller/game");
const question = require("./controller/question");
const user = require("./controller/user");
const request = require('./controller/request');
// const routes = require('./api/routes');


var http = require("http");
setInterval(function () {
    http.get("http://comp4537triviagame.herokuapp.com");
}, 2400000); // every 40 minutes, (300000) is 5 min

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use('/doc', swaggerUI.serve, swaggerUI.setup(docs));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// handles CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
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
app.use('/api/v1/game', game);
app.use('/api/v1/question', question);
app.use('/api/v1/user', user);
app.use('/api/v1/request', request);


app.listen(port, () => console.log(`Server up and running on port ${port} !`));