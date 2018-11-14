const express = require('express');
const router = express.Router();
const healthGaugeController = require('../controllers/healthGauge.js');

// renders form to create new health gauge
router.get('/new', healthGaugeController.newHealthGauge)

// creates new health gauge
router.post('/', healthGaugeController.createHealthGauge)

module.exports = router;