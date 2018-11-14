const express = require('express');
const router = express.Router();
const healthGaugeController = require('../controllers/healthGauge.js');

// renders form to create new health gauge
router.get('/new/:id', healthGaugeController.newHealthGauge)

// creates new health gauge
router.post('/:id', healthGaugeController.createHealthGauge)

// shows new health gauge
// router.get('new/:id', healthGaugeController.showHealthGauge)

module.exports = router;