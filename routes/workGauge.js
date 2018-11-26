const express = require('express');
const router = express.Router();
const workGaugeController = require('../controllers/workGauge.js');


router.get('/new/:id', workGaugeController.newWorkGauge)
router.post('/:id', workGaugeController.createWorkGauge)
router.get('/edit/:id', workGaugeController.editWorkGauge)
router.put('/:id', workGaugeController.putWorkGauge)


module.exports = router;
