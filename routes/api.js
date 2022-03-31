const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const AuthController = require('../controllers/authController');
const AppointmentController = require('../controllers/appointmentsController');
const PatientsController = require('../controllers/patientsController');

router.get('/', AuthController.getApiRouteRootPath);

router.get('/register', AuthController.getRegister);

router.get('/login', AuthController.getLogin);

router.post('/register', AuthController.postRegister);

router.post('/login', AuthController.postLogin);

router.get('/view-all-patient-appointments', AppointmentController.viewAllPatientAppointments);

router.get('/view-prescription-history', PatientsController.viewPrescriptionHistory);

module.exports = router;