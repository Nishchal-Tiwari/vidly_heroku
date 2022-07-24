const express = require('express');
const Router = express.Router();
const schema = require('./vid_schema')
const getuser = require('./get_user')
const userr = require('./register_schema')
Router.route('/').get(
    async(req, res) => {
        console.log(req.session.uid + "<--session")

        if (req.session.uid) {
            var x = req.query.id
            x = x.replace("https://drive.google.com/file/d/", "")
            x = x.replace("/view?usp=sharing", "")


            const y = "https://drive.google.com/uc?id=" + x + "&export=download"
            const dat = {
                name: req.query.name,
                link: y,
                userId: getuser(req.session.uid),
                is_public: req.query.public
            }

            const data = new schema(dat)

            const result = await data.save()
            await userr.updateOne({ id: getuser(req.session.uid) }, {
                $push: {
                    videos: {
                        objId: result._id,
                        is_public: result.is_public,
                        date: Date.now()
                    }
                }
            })

            console.log(result._id)
            res.send("sucess")
        } else {
            res.send("relogin")
            console.log("relogin")
        }

    })

module.exports = Router;