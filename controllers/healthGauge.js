const HealthGauge = require("../models/HealthGauge.js");
const User = require("../models/User.js")

// renders form to create new health gauge
module.exports = {
    newHealthGauge: (req, res) => {
        res.render('user/createHealth.hbs', {id: req.params.id})
    },
    createHealthGauge: (req, res) => {
        //create the health guage with the user id
        HealthGauge.create({
            level: req.body.level,
            user: req.params.id
        })
        .then(healthGauge => {
            res.render("user/showDashboard.hbs", {healthGauge })
        })
    },
    editHealthGauge: (req, res) => {
        HealthGauge.findById({_id : req.params.id})
        .then(healthGauge => {
            res.render('user/editHealth.hbs', {healthGauge})
        })
    },
    putHealthGauge: (req, res) => {
        req.body.complete = req.body.complete ? true : false
        HealthGauge.findByIdAndUpdate({_id: req.params.id}, req.body, {new : true})
        .then (healthGauge => {
            res.render("user/showDashboard.hbs", {healthGauge})
        })
    }
}