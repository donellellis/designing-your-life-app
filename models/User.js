const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// why is local used?
const User = new Schema({
  email: String,
  password: String
});

module.exports = mongoose.model("User", User)



// const mongoose = require("../db/connection");
// const Schema = mongoose.Schema;

// const User = new Schema({
//   local: {
//     email: String,
//     password: String
//   }
// });

// module.exports = mongoose.model("User", User);

// from express twitter
// const User = new Schema({
//   local: {
//     email: String,
//     password: String
//   },
//   tweets: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Tweet"
//     }
//   ]
// });
