Cam = require('../Model/CamModel');

exports.index = function (req, res) {
    Cam.get(function (err, cams) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Cams retrieved successfully",
            data: cams
        });
    });
};

exports.new = function (req, res) {
    var cam = new Cam();
    cam.minutesOn = req.body.minutesOn;

    cam.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New cam created!',
            data: cam
        });
    });
};

// Handle view cam info
exports.view = function (req, res) {
    Cam.findById(req.params.cam_id, function (err, cam) {
        if (err)
            res.send(err);
        res.json({
            message: 'Cam details loading..',
            data: cam
        });
    });
};

// Handle update cam info
exports.update = function (req, res) {

    Cam.findById(req.params.cam_id, function (err, cam) {
        if (err)
            res.send(err);

        cam.minutesOn = req.body.minutesOn;

    // save the cam and check for errors
        cam.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Cam Info updated',
                data: cam
            });
        });
    });
};

// Handle delete cam
exports.delete = function (req, res) {
    Cam.remove({
        _id: req.params.cam_id
    }, function (err, cam) {
        if (err)
            res.send(err);

    res.json({
            status: "success",
            message: 'Cam deleted'
        });
    });
};