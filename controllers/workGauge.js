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
                console.log('user-Work', user);
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
    }
}
