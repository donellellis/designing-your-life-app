const express = require('express');
const router = express.Router();

router.use('/', require('./application.js'));
router.use('/user', require('./user.js'));
router.use('/health', require('./healthGauge.js'))
router.use('/work', require('./workGauge.js'))

module.exports = router;