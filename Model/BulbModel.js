var mongoose = require('mongoose');

// Setup schema
var bulbSchema = mongoose.Schema({
    minutesOn: Number,
    minutesLeft: Number
});

// Export Bulb model
var Bulb = module.exports = mongoose.model('bulb', bulbSchema);

module.exports.get = function (callback, limit) {
    Bulb.find(callback).limit(limit);
}