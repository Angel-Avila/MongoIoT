var mongoose = require('mongoose');

// Setup schema
var arrivalHourSchema = mongoose.Schema({
    person: String,
    hour: Number
});

// Export arrival hours model
var ArrivalHour = module.exports = mongoose.model('arrivalHour', arrivalHourSchema);

module.exports.get = function (callback, limit) {
    ArrivalHour.find(callback).limit(limit);
}