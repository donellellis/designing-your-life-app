const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

let User = new Schema({
  email: String,
  password: String,
  health: [{
    ref: 'HealthGauge',
    type: Schema.Types.ObjectId
  }],
  work: [{
    ref: 'WorkGauge',
    type: Schema.Types.ObjectId
  }]
});

module.exports = mongoose.model("User", User)
