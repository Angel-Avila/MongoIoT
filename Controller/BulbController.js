Bulb = require('../Model/BulbModel');

exports.index = function (req, res) {
    Bulb.get(function (err, bulbs) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(bulbs);
    });
};

exports.new = function (req, res) {
    var bulb = new Bulb();
    bulb.minutesOn = req.body.minutesOn;
    bulb.minutesLeft = req.body.minutesLeft;

    bulb.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New bulb created!',
            data: bulb
        });
    });
};

// Handle view bulb info
exports.view = function (req, res) {
    Bulb.findById(req.params.bulb_id, function (err, bulb) {
        if (err)
            res.send(err);
        res.json(bulb);
    });
};

// Handle update bulb info
exports.update = function (req, res) {

    Bulb.findById(req.params.bulb_id, function (err, bulb) {
        if (err)
            res.send(err);

        bulb.minutesOn = req.body.minutesOn;
        bulb.minutesLeft = req.body.minutesLeft;

    // save the bulb and check for errors
        bulb.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Bulb Info updated',
                data: bulb
            });
        });
    });
};

// Handle delete bulb
exports.delete = function (req, res) {
    Bulb.remove({
        _id: req.params.bulb_id
    }, function (err, bulb) {
        if (err)
            res.send(err);

    res.json({
            status: "success",
            message: 'Bulb deleted'
        });
    });
};