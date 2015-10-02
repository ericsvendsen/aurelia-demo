var Controller = require('./controller');

exports.endpoints = [
    {
        method: 'GET',
        path: '/',
        handler: {
            view: 'index'
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './client'
            }
        }
    },
    {
        method: 'GET',
        path: '/api/chargecodes',
        config: Controller.getChargeCodes
    },
    {
        method: 'GET',
        path: '/api/chargecodes/{chargeCodeId}',
        config: Controller.getChargeCode
    },
    {
        method: 'GET',
        path: '/api/timelogs',
        config: Controller.getTimeLogs
    },
    {
        method: 'GET',
        path: '/api/timelogs/{timeLogId}',
        config: Controller.getTimeLog
    }
];