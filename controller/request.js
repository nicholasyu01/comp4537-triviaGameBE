const express = require("express");
const router = express.Router();

// Load Team model
const Request = require('../models/Request');

//GET all requests
router.get("/", (req, res) => {
    Request.find(function (err, req) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            return res.json(req);
        }
    });
});

//GET a q
router.get('/:id', (req, res) => {
    let id = req.params.id;
    Request.findById(id, function (err, q) {
        if (err) {
            res.end(JSON.stringify({ message: "Could not make request." }));
        } else {
            return res.json(q);
        }
    });
});
//UPDATE q
router.put('/update/:id', (req, res) => {
    Request.updateOne({ _id: req.params.id }, {
        requests: req.body.requests,
    },
        function (err, result) {
            if (err) {
                res.end(JSON.stringify({ message: "Could not make request." }));
            } else {
                res.end(JSON.stringify({ message: "Request was updated" }));
            }
        });
});
module.exports = router;