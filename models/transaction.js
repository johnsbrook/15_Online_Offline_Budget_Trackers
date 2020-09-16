// Declare mongoose to require "mongoose"
const mongoose = require("mongoose");

// Declare Schema to mongoose.schema
const Schema = mongoose.Schema;

// Declare transactionSchema and construct new Schema for name (trimmed and required), value (required), and date (defaulted at Date.now)
const transactionSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: "Enter transaction name."
        }
    },
    {
        value: {
            type: Number,
            required: "Enter transaction value."
        }
    },
    {
        date: {
            type: Date,
            default: Date.now
        }
    }
);

// Declare Transaction module as a mongoose model named "Transaction" using transactionSchema
const Transaction = mongoose.model("Transaction", transactionSchema)

// Export Transaction module
module.exports = Transaction;