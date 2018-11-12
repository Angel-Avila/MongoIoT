var mongoose = require('mongoose');

// Setup schema
var doorSchema = mongoose.Schema({
    name: String,
    isOn: Boolean
});

// Export Bulb model
var Door = module.exports = mongoose.model('door', doorSchema);

module.exports.get = function (callback, limit) {
    Door.find(callback).limit(limit);
}