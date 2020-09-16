// Declare router to require express router
const router = require("express").Router();

// Declare Transaction to require models/transaction.js
const Transaction = require("../models/transaction");

// Use router to POST "/api/transaction" from ({ body }) request to create body and return a json response of the transaction call back as an argument
router.post("/api/transaction", ({ body }, res) => {
    Transaction.create(body)
        .then(cb => {
            res.json(cb);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

// Use router to POST "/api/transaction/bulk" from ({ body }) request to insertMany into body and return a json reponse of the transaction as an argument
router.post("/api/transaction/bulk", ({ body }, res) => {
    Transaction.insertMany(body)
        .then(cb => {
            res.json(cb);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

// Use router to GET "/api/transaction" from request to find all and sort transaction in descending order and return a json response of the transaction as an argument
router.get("/api/transaction", (req, res) => {
    Transaction.find({}).sort({ date: -1 })
    .then(cb => {
        res.json(cb);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

// Export router module
module.exports = router;