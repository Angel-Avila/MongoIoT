var mongoose = require('mongoose');

// Setup schema
var camSchema = mongoose.Schema({
    name: String,
    minutesOn: Number,
    isOn: Boolean
});

// Export Cam model
var Cam = module.exports = mongoose.model('cam', camSchema);

module.exports.get = function (callback, limit) {
    Cam.find(callback).limit(limit);
}