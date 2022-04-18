const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    ProjectId: {
        type: String,
        required: true
    },
    ProjectName: {
        type: String,
        required: true
    },
    ProjectManager: {
        type: String,
        required: true
    },
    dris: {
        type: [{
            type: String
        }],
        required: true
    },
    developers: {
        type: [{
            type: String
        }],
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);