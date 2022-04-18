const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const backlogSchema = new Schema({
    ProjectId: {
        type: String,
        required: true
    },
    BacklogId: {
        type: String,
        required: true
    },
    BacklogName: {
        type: String,
        required: true
    },
    Priority: {
        type: Number,
        required: true
    },
    Effort: {
        type: Number,
        required: true
    },
    Description : {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Backlog', backlogSchema);