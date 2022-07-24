const express = require('express');
const Router = express.Router();
const vid = require('./vid_schema')
const getuser = require('./get_user')
Router.route('/').get(async(req, res) => {

    if (req.session.uid) {
        const user = getuser(req.session.id);
        const data = await vid.find({ $or: [{ is_public: true }, { id: user }] });

        data = await data.json()





        res.setHeader('Content-Type', 'application/json');
        res.send({ data })

    } else {
        res.send("relogin")
    }












})
module.exports = Router;