const express = require("express");
const router = express.Router();

// Load Team model
const Question = require('../models/Question');

//GET all questions
router.get("/", (req, res) => {
    Question.find(function (err, q) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            return res.json(q);
        }
    });
});

//GET all questions of a game by gameId
router.get("/game/:gameId", (req, res) => {
    let id = req.params.gameId;
    Question.find({ gameId: id }, function (err, q) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            return res.json(q);
        }
    });
});

//GET a q
router.get('/:id', (req, res) => {
    let id = req.params.id;
    Question.findById(id, function (err, q) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            return res.json(q);
        }
    });
});

//POST new q
router.post("/add", (req, res) => {
    const q = new Question({
        question: req.body.question,
        options: req.body.options,
        gameId: req.body.gameId
    });
    q.save().then(q =>
        res.json(q)
    ).catch(err =>
        res.json(err)
    )
});

//UPDATE q
router.put('/:id', (req, res) => {
    Question.updateOne({ _id: req.params.id }, {
        question: req.body.question,
        options: req.body.options,
        gameId: req.body.gameId
    },
        function (err, result) {
            if (err) {
                res.end(JSON.stringify({ message: "Could not make request." }));
            } else {
                res.end(JSON.stringify({ message: "Question was deleted" }));
            }
        });
});

//DELETE q
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Question.deleteOne({ _id: id }, function (err) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            res.end(JSON.stringify({ message: "Question was deleted" }));
        }
    });
})

//DELETE questions of a game
router.delete('/game/delete/:gameid', (req, res) => {
    let gameId = req.params.gameid;
    Question.deleteMany({ gameId: gameId }, function (err) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            res.end(JSON.stringify({ message: "Questions were deleted" }));
        }
    });
})

module.exports = router;