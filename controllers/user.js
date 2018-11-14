const User = require("../models/User.js");

module.exports = {
  signUp: (req, res) => {
    res.render("user/signup.hbs");
  },
  createSignUp: (req, res) => {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then(user => {
      res.redirect("/user/" + user.id)
    })
  },
  show: (req, res) => {
    User.findOne({_id: req.params.id})
    .then(user => {
      res.render("user/show.hbs", {user});
      });
  },
  createHealthGauge: (req, res) => {
    HealthGauge.create({
      level: req.body.level
    })
    .then(user => {
      res.redirect(`/${HealthGauge._id}`)
    })
  },
  showHealthGauge: (req, res) => {
    User.findOne({_id: req.params.id})
    .populate('health')
    .then(healthGauge => {
      res.render("user/showHealth.hbs", {healthGauge});
    })
  }
};
