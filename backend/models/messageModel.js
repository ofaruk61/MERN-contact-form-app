const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    fullname: { type: String, required: true },
    email:  String,
    message: { type: String, required: true },
    subject: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    isAccepted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Message', messageSchema);