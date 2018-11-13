const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dyl");

mongoose.Promise = Promise;

module.exports = mongoose;
