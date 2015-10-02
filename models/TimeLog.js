var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var TimeLogSchema = new Schema({
    id: Number,
    user: String,
    payPeriod: [
        {
            "start": Date,
            "end": Date,
            "spendPlan": [
                {
                    "id": Number,
                    "hours": Number
                }
            ]
        }
    ]
});

var timeLogModel = Mongoose.model('timelogs', TimeLogSchema);

module.exports = {
    model: timeLogModel
};