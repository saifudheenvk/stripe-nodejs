const User = require("../db/schema/user")

module.exports = {
    registerUser: async (req,res)=>{
        try {
            const data = User.registerUser(req.body)
        if (data) {
            res.status(200).send(data.name)
        } else {
            res.status(400).send("Already exist")
        }
        } catch (e) {
            res.status(500).send(e)
        }
    },
    updateUser: async (req,res)=>{
        try {
            let user = await User.findById(req.params.id)
        if (user) {
            user.overwrite(req.body);
            await user.save()
            res.status(200).send(user.name)
        } else {
            res.status(400).send("User doesn't exist")
        }
        } catch (e) {
            res.status(500).send(e)
        }
    },
    userList: async (req, res) =>{
        try {
            const users = await User.find({name:{$regex:req.query.name}})
            res.status(200).send(users)
        } catch (e) {
            res.status(500).send(e)
        }
    }
}