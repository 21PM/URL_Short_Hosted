const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({

    longUrl:{
        type:String
    },
    shortUrl:{
        type:String
    },

})


const urlModel = mongoose.model("Urls",urlSchema)

module.exports = urlModel;
