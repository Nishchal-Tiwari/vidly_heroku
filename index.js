const mongo = require('mongoose');
const express = require('express')
const app = express();

function connect() {
    mongo.connect("mongodb+srv://messenger:Project%40123@cluster0.10fn5ry.mongodb.net/?retryWrites=true&w=majority").then(console.log("Sucessfully ! connected to database")).catch(err => console.log(err))
}
app.get('/', (req, res) => res.send("helllloooo"))
app.get("/sayhi", (req, res) => res.send(" hi"))

const schma = new mongo.Schema({
    name: String
})
const rr = mongo.model('vids', schma)
app.get('/ask', (req, res) => {
    const s = new rr({ name: req.query.name })
    s.save()
    res.send("hello ! " + req.query.name + " Your query has been recorded")
})
app.get('/aski/:id', (req, res) => {
    const s = new rr({ name: req.paras['id'] })
    s.save()
    res.send("hello ! " + req.paras['id'] + " Your query has been recorded")
})
connect()
app.listen(process.env.PORT || '3000', () => console.log("started"))