let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import bulb controller
var bulbController = require('./BulbController');

// Bulb routes
router.route('/bulb')
    .get(bulbController.index)
    .post(bulbController.new);

router.route('/bulb/:bulb_id')
    .get(bulbController.view)
    .patch(bulbController.update)
    .put(bulbController.update)
    .delete(bulbController.delete);

// Export API routes
module.exports = router;