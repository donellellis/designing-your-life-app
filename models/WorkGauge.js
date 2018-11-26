const mongoose = require('../db/connection')
const Schema = mongoose.Schema


let WorkGauge = new Schema({
	level: Number,
	workAssessment: String,
	user: {
		ref: 'User',
		type: Schema.Types.ObjectId
	}
})

module.exports = mongoose.model("WorkGauge", WorkGauge)