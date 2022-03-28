const PrescriptionHistory = require('../models/prescriptionHistory');


class PatientsController {
    prescriptionHistory = [];
    static viewPrescriptionHistory = async (req, res) => {
        this.prescriptionHistory = await PrescriptionHistory.find({});
        if (this.prescriptionHistory) {
            res.status(200).json(this.prescriptionHistory);
        } else {
            res.status(404).json({
                "errorMessage": "Data Not Found"
            });
        }
    }
}

module.exports = PatientsController;