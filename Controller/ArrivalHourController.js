ArrivalHour = require('../Model/ArrivalHourModel');

exports.index = function (req, res) {
    ArrivalHour.get(function (err, arrivalHours) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "ArrivalHours retrieved successfully",
            data: arrivalHours
        });
    });
};

exports.new = function (req, res) {
    var arrivalHour = new ArrivalHour();
    arrivalHour.person = req.body.person;
    arrivalHour.hour = req.body.hour;

    arrivalHour.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New arrivalHour created!',
            data: arrivalHour
        });
    });
};

// Handle view arrivalHour info
exports.view = function (req, res) {
    ArrivalHour.findById(req.params.arrivalHour_id, function (err, arrivalHour) {
        if (err)
            res.send(err);
        res.json({
            message: 'ArrivalHour details loading..',
            data: arrivalHour
        });
    });
};

// Handle update arrivalHour info
exports.update = function (req, res) {

    ArrivalHour.findById(req.params.arrivalHour_id, function (err, arrivalHour) {
        if (err)
            res.send(err);

        arrivalHour.person = req.body.person;
        arrivalHour.hour = req.body.minutesLeft;

    // save the arrivalHour and check for errors
        arrivalHour.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'ArrivalHour Info updated',
                data: arrivalHour
            });
        });
    });
};

// Handle delete arrivalHour
exports.delete = function (req, res) {
    ArrivalHour.remove({
        _id: req.params.arrivalHour_id
    }, function (err, arrivalHour) {
        if (err)
            res.send(err);

    res.json({
            status: "success",
            message: 'ArrivalHour deleted'
        });
    });
};