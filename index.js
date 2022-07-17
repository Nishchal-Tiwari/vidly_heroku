const mongo = require('mongoose');

function connect() {
    mongo.connect("mongodb+srv://messenger:Project%40123@cluster0.10fn5ry.mongodb.net/?retryWrites=true&w=majority").then(console.log("Sucessfully ! connected to database")).catch(err => console.log(err))
}

const schma = new mongo.Schema({
    name: String
})
const rr = mongo.model('vids', schma)
const s = new rr({ name: "roorkee" })
s.save()
connect()