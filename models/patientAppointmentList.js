const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientAppointmentListSchema = new Schema({
    profilePic: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('PatientAppointmentList', patientAppointmentListSchema);

