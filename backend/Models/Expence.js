const mongoose = require("mongoose")


// create Schema(format) for database//

const expSchema = new mongoose.Schema({
    item:String,
    price:Number,
    date:Date

})

module.exports = mongoose.model("expence", expSchema);