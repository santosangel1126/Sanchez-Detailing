const sequalize = require('../config/connection');
const { USer, Appointment } =require('../models');

const appointmentData = [

];

const seedAppointments = () => Appointment.bulkCreate(appointmentData);

module.exports = seedAppointments;