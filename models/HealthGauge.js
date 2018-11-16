const mongoose = require('../db/connection')
const Schema = mongoose.Schema


let HealthGauge = new Schema({
	level: Number,
	healthAssessment: String,
	user: {
		ref: 'User',
		type: Schema.Types.ObjectId
	}
})

module.exports = mongoose.model("HealthGauge", HealthGauge)