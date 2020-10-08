const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
const RecipientScema = require('./Recipient');

const surveySchema = new Schema ({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientScema],
    yes: { type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'Uder'},
    dateSent: Date,
    lastResponded: Date

});

mongoose.model('surveys', surveySchema);