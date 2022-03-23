const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    profileImageUrl: { type: String, default:'https://i.imgur.com/omgwAlZ.png' },
    password: { type: String, required: true },
    role: { type: String, default: 'patient' },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);