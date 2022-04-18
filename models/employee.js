const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    xp: {
        type: Number,
        required: true
    },
    backlogIds: {
        type: [{
            type: String
        }],
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);