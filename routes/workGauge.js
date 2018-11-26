const express = require('express');
const router = express.Router();
const workGaugeController = require('../controllers/workGauge.js');


router.get('/new/:id', workGaugeController.newWorkGauge)
router.post('/:id', workGaugeController.createWorkGauge)
// router.get('/edit/:id', healthGaugeController.editHealthGauge)
// router.put('/:id', healthGaugeController.putHealthGauge)


module.exports = router;
