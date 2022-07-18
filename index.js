const mongo = require('mongoose');
const express = require('express')
const app = express();
const register = require('./register')
const login = require('./login');
const parser = require('cookie-parser');
const db_connect = require('./db_connect');
const con_to_db = require('./db_connect')
const ip = require("ip");
const session = require('express-session')



//middleware
app.use(express.static("public"));
app.use(parser())
con_to_db()
app.use(express.json())
console.log(ip.address());
app.use(session({ key: "uid", secret: "0xC345$%^&ewfwfwaae#$%^&*SDFGHJKNBVCFDRGTHJM", resave: false, saveUninitialized: true, }))


app.use('/register', register)
app.use('/login', login)



app.get("/sayhi", (req, res) => res.send("hi"))
app.get('/logout', (r, rs) => {
    r.session.destroy()
    rs.redirect("https://delta-xpr-app.herokuapp.com")
})






app.listen(process.env.PORT || '3000', () => console.log("started"))