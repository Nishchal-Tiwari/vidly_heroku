const express = require('express');
const Router = express.Router();
const schema = require('./vid_schema')
Router.route('/').get(
    async(req, res) => {

        var x = req.query.id
        x = x.replace("https://drive.google.com/file/d/", "")
        x = x.replace("/view?usp=sharing", "")


        const y = "https://drive.google.com/uc?id=" + x + "&export=download"
        const dat = {
            name: req.query.name,
            link: y
        }

        const data = new schema(dat)

        const result = await data.save()
        console.log(result)
        res.send(result)

    })

module.exports = Router;