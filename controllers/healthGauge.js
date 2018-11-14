const HealthGauge = require("../models/HealthGauge.js");
const User = require("../models/User.js")

// renders form to create new health gauge
module.exports = {
    newHealthGauge: (req, res) => {
        res.render('user/showHealth.hbs')
    },
    createHealthGauge: (req, res) => {
        HealthGauge.create({
            level: req.body.level
        })
        .then(healthGauge => {
            res.redirect('/' +healthGauge.id)
        })
    }
}

// module.exports = {
//     newHealthGauge: (req, res) => {
//         User.findOne({_id: req.params.id})
//         .populate('health')
//         .then(healthGauge => {
//             res.render("user/showHealth.hbs", {healthGauge});
//         })
//     }
// }

//   createHealthGauge: (req, res) => {
//     HealthGauge.create({
//         level: req.body.level
//     })
//     .then(user => {
//         res.redirect(`/${HealthGauge._id}`)
//     })
//   },
// showHealthGauge: (req, res) => {
//     User.findOne({_id: req.params.id})
//     .populate('health')
//     .then(healthGauge => {
//       res.render("user/showHealth.hbs", {healthGauge});
//     })
//   }

// router.get('/artworks/new', (req, res) => {
//     res.render('new');
// })

// router.post('/artworks', (req, res) => {
//     Artworks.create({
//         artist: req.body.artist,
//         title: req.body.title,
//         year: req.body.year,
//         medium: req.body.medium
//     }).then( artwork => {
//         res.redirect('/artworks/' + artwork.id)
//     })
// })

// router.get('/artworks/:id', (req, res) => {
//     Artworks.findOne({_id : req.params.id}).then(artwork => {
//         res.render('show', artwork)
//     })
// })