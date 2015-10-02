var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var ChargeCodeSchema = new Schema({
    id: Number,
    name: String,
    title: String,
    code: String,
    subTask: String,
    spendPlan: [
        {
            "month": String,
            "year": Number,
            "hours": Number
        }
    ]
});

var chargeCodeModel = Mongoose.model('chargecodes', ChargeCodeSchema);

module.exports = {
    model: chargeCodeModel
};