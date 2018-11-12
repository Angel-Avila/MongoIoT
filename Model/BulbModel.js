var mongoose = require('mongoose');

// Setup schema
var bulbSchema = mongoose.Schema({
    name: String,
    minutesOn: Number,
    minutesLeft: Number,
    isOn: Boolean
});

// Export Bulb model
var Bulb = module.exports = mongoose.model('bulb', bulbSchema);

module.exports.get = function (callback, limit) {
    Bulb.find(callback).limit(limit);
}