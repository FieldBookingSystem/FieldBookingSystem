const router = require('express').Router();
const coachRoutes = require('./coachRoutes');
const bookingRoutes = require('./bookingRoutes');
const fieldsRoutes = require('./fieldsRoutes');

router.use('/coach', coachRoutes);
router.use('/booking', bookingRoutes);
router.use('/fields', fieldsRoutes);

module.exports = router;
