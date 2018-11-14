const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  health: [{
    ref: 'HealthGauge',
    type: Schema.Types.ObjectId
  }]
});

module.exports = mongoose.model("User", User)

