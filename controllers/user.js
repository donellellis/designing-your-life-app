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
  }
  // ,
  // show: (req, res) => {
  //   User.findOne({_id: req.params.id})
  //   .then(user => {
  //     res.render("user/show.hbs", {user});
  //     });
  // }
};