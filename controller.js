var Boom = require('boom'),
    ChargeCode = require('./models/ChargeCode'),
    TimeLog = require('./models/TimeLog');

exports.getChargeCodes = {
    handler: function (request, reply) {
        ChargeCode.model.find({}, function (err, chargeCodes) {
            if (!err) {
                reply(chargeCodes);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getChargeCode = {
    handler: function (request, reply) {
        ChargeCode.model.findOne({ 'id': request.params.chargeCodeId }, function (err, chargeCode) {
            if (!err) {
                reply(chargeCode);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getTimeLogs = {
    handler: function (request, reply) {
        TimeLog.model.find({}, function (err, timeLogs) {
            if (!err) {
                reply(timeLogs);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getTimeLog = {
    handler: function (request, reply) {
        TimeLog.model.findOne({ 'id': request.params.timeLogId }, function (err, timeLog) {
            if (!err) {
                reply(timeLog);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};