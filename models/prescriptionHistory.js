const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionHistorySchema = new Schema({
    symptom: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required:true },
    medication: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('PrescriptionHistory', prescriptionHistorySchema);