const express = require("express");
const router = express.Router();

// Load Team model
const Game = require('../models/Game');

//GET all game
router.get("/", (req, res) => {
    Game.find(function (err, game) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            return res.json(game);
        }
    });
});


//GET a game
router.get('/:id', (req, res) => {
    let id = req.params.id;
    Game.findById(id, function (err, game) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            return res.json(game);
        }
    });
});

//POST new game
router.post("/add", (req, res) => {
    const game = new Game({
        gameName: req.body.gameName,
    });
    game.save().then(game =>
        res.json(game)
    ).catch(err =>
        res.json(err)
    )
});

//UPDATE game
router.put('/:id', (req, res) => {
    Game.updateOne({ _id: req.params.id }, {
        gameName: req.body.gameName
    },
        function (err, result) {
            if (err) {
                res.end(JSON.stringify({ message: "Could not make request." }));
            } else {
                res.end(JSON.stringify({ message: "Game was deleted" }));
            }
        });
});

//DELETE game
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Game.deleteOne({ _id: id }, function (err) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            res.end(JSON.stringify({ message: "Game was deleted" }));
        }
    });
})

module.exports = router;