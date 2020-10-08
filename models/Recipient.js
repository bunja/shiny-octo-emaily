const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientScema = new Scema({
    email: String,
    responded: {type: Boolean, default: false }
});

module.exports = recipientScema;