const HealthGauge = require("../models/HealthGauge.js");
const User = require("../models/User.js")
const WorkGauge = require("../models/WorkGauge")


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
                user.save();
                res.render('user/createWork.hbs', {healthGauge})
            })
        })
    },
    editHealthGauge: (req, res) => {
        HealthGauge.findById({_id : req.params.id})
        .then(healthGauge => {
            console.log('healthGauge', healthGauge)
            res.render('user/editHealth.hbs', {healthGauge})
        })
    },
    
    putHealthGauge: (req, res) => {
        HealthGauge.finByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then (healthGauge => {
            WorkGauge.findOne({user: healthGauge.user})
            .then( (workGauge) => {
                const dashboardData = {
                    id: healthGauge.user,
                    workLevel: workGauge.level,
                    healthLevel: healthGauge.level,
                    workId: workGauge._id ,
                    healthId: healthGauge._id
                }
                res.render("user/showDashboard.hbs", {dashboardData})
            })
            
        })
    }
}
