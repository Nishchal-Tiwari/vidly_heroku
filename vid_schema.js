const mongo = require('mongoose')
module.exports = mongo.model("video", new mongo.Schema({
    link: { type: String, required: true },
    name: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    likes: { Number, default: 0 }



}))