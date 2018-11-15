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
            res.render("user/showDashboard.hbs", {healthGauge})
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
            // res.redirect("/user/" + healthGauge.user, {healthGauge})
            res.render("user/showDashboard.hbs", {healthGauge})
        })
    }
}

// {user : req.params.userid
// }

// router.put('/artworks/update/:id', (req, res) => {
//     req.body.complete = req.body.complete ? true : false
//     Artworks.findOneAndUpdate({_id: req.params.id}, req.body, { new : true})
//     .then( todo => {
//         res.redirect('/artworks/' + todo.id)
//     })
// })

// update: (req, res) => {
//       let { content } = req.body;
//       Tweet.findOne({ _id: req.params.id }).then(tweet => {
//         tweet.comments.push({
//           content,
//           author: req.user._id
//         });
//         tweet.save(err => {
//           res.redirect(`/tweet/${tweet._id}`);
//         });
//       });
//     },
