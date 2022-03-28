const AppointmentList = require('../models/patientAppointmentList');


class AppointmentController {
    appointmentList;
    static viewAllPatientAppointments = async (req, res) => {
        this.appointmentList = await AppointmentList.find({});
        res.status(200).json(this.appointmentList);
    }
}

module.exports = AppointmentController;