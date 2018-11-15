const express = require('express');
const router = express.Router();
const healthGaugeController = require('../controllers/healthGauge.js');

// renders form to create new health gauge
router.get('/new/:id', healthGaugeController.newHealthGauge)

// creates new health gauge
router.post('/:id', healthGaugeController.createHealthGauge)

// render form to update a single resource
router.get('/edit/:id/', healthGaugeController.editHealthGauge)

// update single resource
router.put('/:id', healthGaugeController.putHealthGauge)

module.exports = router;

// router.put('/artworks/update/:id', (req, res) => {
//     req.body.complete = req.body.complete ? true : false
//     Artworks.findOneAndUpdate({_id: req.params.id}, req.body, { new : true})
//     .then( todo => {
//         res.redirect('/artworks/' + todo.id)
//     })
// })