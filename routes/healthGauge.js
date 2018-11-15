const express = require('express');
const router = express.Router();
const healthGaugeController = require('../controllers/healthGauge.js');

// renders form to create new health gauge
router.get('/new/:id', healthGaugeController.newHealthGauge)

// creates new health gauge
router.post('/:id', healthGaugeController.createHealthGauge)

// render form to update a single resource
router.get('/edit/:id', healthGaugeController.editHealthGauge)

// update health gauge
router.put('/:id', healthGaugeController.putHealthGauge)


module.exports = router;
