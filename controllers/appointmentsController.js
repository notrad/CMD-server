const AppointmentList = require('../models/patientAppointmentList');


class AppointmentController {
    appointmentList = [];
    static viewAllPatientAppointments = async (req, res) => {
        this.appointmentList = await AppointmentList.find({});
        if (this.appointmentList) {
            res.status(200).json(this.appointmentList);
        } else {
            res.status(404).json({
                "errorMessage": "Data Not Found"
            });
        }
    }
}

module.exports = AppointmentController;