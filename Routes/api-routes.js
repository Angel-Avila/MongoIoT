let router = require('express').Router();

router.get('/', function (req, res) {
    res.sendFile('../index.html');
});

//  Import controllers
var bulbController = require('../Controller/BulbController');
var camController = require('../Controller/CamController');
var arrivalHourController = require('../Controller/ArrivalHourController');
var doorController = require('../Controller/DoorController');

// Bulb routes
router.route('/bulb')
    .get(bulbController.index)
    .post(bulbController.new);

router.route('/bulb/:bulb_id')
    .get(bulbController.view)
    .patch(bulbController.update)
    .put(bulbController.update)
    .delete(bulbController.delete);

// Cam routes
router.route('/cam')
    .get(camController.index)
    .post(camController.new);

router.route('/cam/:cam_id')
    .get(camController.view)
    .patch(camController.update)
    .put(camController.update)
    .delete(camController.delete);

// Arrival hour routes
router.route('/arrivalHour')
    .get(arrivalHourController.index)
    .post(arrivalHourController.new);

router.route('/arrivalHour/:arrivalHour_id')
    .get(arrivalHourController.view)
    .patch(arrivalHourController.update)
    .put(arrivalHourController.update)
    .delete(arrivalHourController.delete);

// Door routes
router.route('/door')
    .get(doorController.index)
    .post(doorController.new);

router.route('/door/:door_id')
    .get(doorController.view)
    .patch(doorController.update)
    .put(doorController.update)
    .delete(doorController.delete);

// Export API routes
module.exports = router;