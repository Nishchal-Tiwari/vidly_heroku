const mongo = require('mongoose')
module.exports = function connect() { mongo.connect("mongodb+srv://messenger:Project%40123@cluster0.10fn5ry.mongodb.net/?retryWrites=true&w=majority").then(console.log("Sucessfully ! connected to database")).catch(err => console.log(err)) }