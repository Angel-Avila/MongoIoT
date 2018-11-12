Door = require('../Model/DoorModel');

exports.index = function (req, res) {
    Door.get(function (err, doors) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(doors);
    });
};

exports.new = function (req, res) {
    var door = new Door();
    door.name = req.body.name;
    door.isOn = req.body.isOn;

    door.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New door created!',
            data: door
        });
    });
};

// Handle view door info
exports.view = function (req, res) {
    Door.findById(req.params.door_id, function (err, door) {
        if (err)
            res.send(err);
        res.json(door);
    });
};

// Handle update door info
exports.update = function (req, res) {

    Door.findById(req.params.door_id, function (err, door) {
        if (err)
            res.send(err);

        door.name = req.body.name;
        door.isOn = req.body.isOn;

    // save the door and check for errors
        door.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Door Info updated',
                data: door
            });
        });
    });
};

// Handle delete door
exports.delete = function (req, res) {
    Door.remove({
        _id: req.params.door_id
    }, function (err, door) {
        if (err)
            res.send(err);

    res.json({
            status: "success",
            message: 'Door deleted'
        });
    });
};