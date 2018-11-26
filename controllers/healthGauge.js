const HealthGauge = require("../models/HealthGauge.js");
const User = require("../models/User.js")


module.exports = {
    newHealthGauge: (req, res) => {
        res.render('user/createHealth.hbs', {id: req.params.id})
    },
    createHealthGauge: (req, res) => {
        HealthGauge.create({
            level: req.body.level,
            healthAssessment: req.body.healthAssessment,
            user: req.params.id
        })
        .then(healthGauge => {
            User.findById({_id: req.params.id})
            .then(user => {
                user.health.push(healthGauge);
                console.log('user-Health', user);
                user.save();
                res.render('user/createWork.hbs', {healthGauge})
            })
        })
    },
    editHealthGauge: (req, res) => {
        HealthGauge.findById({_id : req.params.id})
        .then(healthGauge => {
            res.render('user/editHealth.hbs', {healthGauge})
        })
    },
    putHealthGauge: (req, res) => {
        HealthGauge.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then (healthGauge => {
            res.render("user/showDashboard.hbs", {healthGauge})
        })
    }
}