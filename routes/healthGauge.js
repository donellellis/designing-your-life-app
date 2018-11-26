const express = require('express');
const router = express.Router();
const healthGaugeController = require('../controllers/healthGauge.js');


router.get('/new/:id', healthGaugeController.newHealthGauge)
router.post('/:id', healthGaugeController.createHealthGauge)
router.get('/edit/:id', healthGaugeController.editHealthGauge)
router.put('/:id', healthGaugeController.putHealthGauge)


module.exports = router;