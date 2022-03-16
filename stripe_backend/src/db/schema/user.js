const mongoose = require("mongoose")
const validator = require("validator")


const UserSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
        unique:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email not valid')
            }
        }
    },
})

UserSchema.statics.registerUser = async function(data){
    let user = await User.findOne({email:data.email})
    if(!user){
        user = await new User(data).save()
    }
    return user
}
const User = mongoose.model("user",UserSchema)
module.exports = User