const express = require('express');
const router = express.Router();

router.use('/', require('./application.js'));
router.use('/user', require('./user.js'));
router.use('/health', require('./healthGauge.js'))

module.exports = router;