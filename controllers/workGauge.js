const WorkGauge = require("../models/WorkGauge.js");
const HealthGauge = require("../models/HealthGauge.js");
const User = require("../models/User.js")

module.exports = {
    newWorkGauge: (req, res) => {
        res.render('user/createWork.hbs', {id: req.params.id})
    },
    createWorkGauge: (req, res) => {
        WorkGauge.create({
            level: req.body.level,
            workAssessment: req.body.workAssessment,
            user: req.params.id
        })
        .then(workGauge => {
            User.findById({_id: req.params.id})
            .then(user => {
                user.work.push(workGauge);
                user.save();
                HealthGauge.findOne({user: req.params.id})
                .then(healthGauge => {
                    const dashboardData = {
                        id: user._id,
                        workLevel: user.work[0].level,
                        healthLevel: healthGauge.level,
                        workId: user.work[0]._id,
                        healthId: healthGauge._id
                    }
                    res.render(`user/showdashboard.hbs`, {dashboardData})
                });
            })
        })
    },
    editWorkGauge: (req, res) => {
        WorkGauge.findById({_id : req.params.id})
        .then(workGauge => {
            res.render('user/editWork.hbs', {workGauge})
        })
    },
    putWorkGauge: (req, res) => {
        WorkGauge.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then (workGauge => {
            HealthGauge.findOne({user: workGauge.user})
            .then ((healthGauge) => {
                const dashboardData = {
                    id: healthGauge.user,
                    workLevel: workGauge.level,
                    healthLevel: healthGauge.level,
                    workId: workGauge._id ,
                    healthId: healthGauge._id
            }
            res.render("user/showdashboard.hbs", {dashboardData})
            })
        })
    }
    
}

