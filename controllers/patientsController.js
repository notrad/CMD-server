const PrescriptionHistory = require('../models/prescriptionHistory');


class PatientsController {
    prescriptionHistory;
    static viewPrescriptionHistory = async (req, res) => {
        this.prescriptionHistory = await PrescriptionHistory.find({});
        res.status(200).json(this.prescriptionHistory);
    }
}

module.exports = PatientsController;