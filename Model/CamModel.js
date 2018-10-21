var mongoose = require('mongoose');

// Setup schema
var camSchema = mongoose.Schema({
    minutesOn: Number
});

// Export Cam model
var Cam = module.exports = mongoose.model('cam', bulbSchema);

module.exports.get = function (callback, limit) {
    Cam.find(callback).limit(limit);
}